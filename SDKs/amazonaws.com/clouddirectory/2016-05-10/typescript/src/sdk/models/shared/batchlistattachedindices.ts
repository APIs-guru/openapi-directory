import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectReference } from "./objectreference";



// BatchListAttachedIndices
/** 
 * Lists indices attached to an object inside a <a>BatchRead</a> operation. For more information, see <a>ListAttachedIndices</a> and <a>BatchReadRequest$Operations</a>.
**/
export class BatchListAttachedIndices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetReference" })
  targetReference: ObjectReference;
}
