import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PutRecordBatchResponseEntry } from "./putrecordbatchresponseentry";


export class PutRecordBatchOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Encrypted" })
  encrypted?: boolean;

  @Metadata({ data: "json, name=FailedPutCount" })
  failedPutCount: number;

  @Metadata({ data: "json, name=RequestResponses", elemType: shared.PutRecordBatchResponseEntry })
  requestResponses: PutRecordBatchResponseEntry[];
}
