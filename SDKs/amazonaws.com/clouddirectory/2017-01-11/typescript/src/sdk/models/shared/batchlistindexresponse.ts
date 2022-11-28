import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IndexAttachment } from "./indexattachment";



// BatchListIndexResponse
/** 
 * Represents the output of a <a>ListIndex</a> response operation.
**/
export class BatchListIndexResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IndexAttachments", elemType: IndexAttachment })
  indexAttachments?: IndexAttachment[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
