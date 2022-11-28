import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IndexAttachment } from "./indexattachment";



// BatchListAttachedIndicesResponse
/** 
 * Represents the output of a <a>ListAttachedIndices</a> response operation.
**/
export class BatchListAttachedIndicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IndexAttachments", elemType: IndexAttachment })
  indexAttachments?: IndexAttachment[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
