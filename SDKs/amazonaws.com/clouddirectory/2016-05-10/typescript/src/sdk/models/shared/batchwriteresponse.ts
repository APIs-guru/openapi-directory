import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BatchWriteOperationResponse } from "./batchwriteoperationresponse";


export class BatchWriteResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Responses", elemType: shared.BatchWriteOperationResponse })
  responses?: BatchWriteOperationResponse[];
}
