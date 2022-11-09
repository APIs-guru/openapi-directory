import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObjectReference } from "./objectreference";


// BatchListObjectParentPaths
/** 
 * Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects inside a <a>BatchRead</a> operation. For more information, see <a>ListObjectParentPaths</a> and <a>BatchReadRequest$Operations</a>.
**/
export class BatchListObjectParentPaths extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ObjectReference" })
  objectReference: ObjectReference;
}
