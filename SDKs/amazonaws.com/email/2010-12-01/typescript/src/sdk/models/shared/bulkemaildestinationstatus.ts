import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BulkEmailStatusEnum } from "./bulkemailstatusenum";



// BulkEmailDestinationStatus
/** 
 * An object that contains the response from the <code>SendBulkTemplatedEmail</code> operation.
**/
export class BulkEmailDestinationStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  error?: string;

  @SpeakeasyMetadata()
  messageId?: string;

  @SpeakeasyMetadata()
  status?: BulkEmailStatusEnum;
}
