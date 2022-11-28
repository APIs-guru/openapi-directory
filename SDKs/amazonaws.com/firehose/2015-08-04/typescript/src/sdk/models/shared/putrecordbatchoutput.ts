import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PutRecordBatchResponseEntry } from "./putrecordbatchresponseentry";



export class PutRecordBatchOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Encrypted" })
  encrypted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=FailedPutCount" })
  failedPutCount: number;

  @SpeakeasyMetadata({ data: "json, name=RequestResponses", elemType: PutRecordBatchResponseEntry })
  requestResponses: PutRecordBatchResponseEntry[];
}
