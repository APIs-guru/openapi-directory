import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IndexAttachment } from "./indexattachment";


// BatchListIndexResponse
/** 
 * Represents the output of a <a>ListIndex</a> response operation.
**/
export class BatchListIndexResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=IndexAttachments", elemType: shared.IndexAttachment })
  indexAttachments?: IndexAttachment[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
