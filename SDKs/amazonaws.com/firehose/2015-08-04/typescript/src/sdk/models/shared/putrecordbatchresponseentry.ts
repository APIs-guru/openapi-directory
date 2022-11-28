import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PutRecordBatchResponseEntry
/** 
 * Contains the result for an individual record from a <a>PutRecordBatch</a> request. If the record is successfully added to your delivery stream, it receives a record ID. If the record fails to be added to your delivery stream, the result includes an error code and an error message.
**/
export class PutRecordBatchResponseEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=RecordId" })
  recordId?: string;
}
