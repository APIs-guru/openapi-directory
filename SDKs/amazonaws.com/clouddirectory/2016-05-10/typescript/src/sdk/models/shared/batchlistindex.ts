import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectReference } from "./objectreference";
import { ObjectAttributeRange } from "./objectattributerange";



// BatchListIndex
/** 
 * Lists objects attached to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>ListIndex</a> and <a>BatchReadRequest$Operations</a>.
**/
export class BatchListIndex extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IndexReference" })
  indexReference: ObjectReference;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=RangesOnIndexedValues", elemType: ObjectAttributeRange })
  rangesOnIndexedValues?: ObjectAttributeRange[];
}
