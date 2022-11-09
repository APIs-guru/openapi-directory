import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObjectReference } from "./objectreference";


// BatchListObjectChildren
/** 
 * Represents the output of a <a>ListObjectChildren</a> operation.
**/
export class BatchListObjectChildren extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ObjectReference" })
  objectReference: ObjectReference;
}
