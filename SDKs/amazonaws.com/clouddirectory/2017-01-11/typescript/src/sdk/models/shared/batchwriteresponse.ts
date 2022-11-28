import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchWriteOperationResponse } from "./batchwriteoperationresponse";



export class BatchWriteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Responses", elemType: BatchWriteOperationResponse })
  responses?: BatchWriteOperationResponse[];
}
