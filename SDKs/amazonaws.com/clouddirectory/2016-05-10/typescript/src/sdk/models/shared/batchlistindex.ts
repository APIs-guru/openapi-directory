import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ObjectReference } from "./objectreference";
import { ObjectAttributeRange } from "./objectattributerange";


// BatchListIndex
/** 
 * Lists objects attached to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>ListIndex</a> and <a>BatchReadRequest$Operations</a>.
**/
export class BatchListIndex extends SpeakeasyBase {
  @Metadata({ data: "json, name=IndexReference" })
  indexReference: ObjectReference;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=RangesOnIndexedValues", elemType: shared.ObjectAttributeRange })
  rangesOnIndexedValues?: ObjectAttributeRange[];
}
