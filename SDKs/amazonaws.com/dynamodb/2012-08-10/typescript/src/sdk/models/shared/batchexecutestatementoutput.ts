import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchStatementResponse } from "./batchstatementresponse";



export class BatchExecuteStatementOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Responses", elemType: BatchStatementResponse })
  responses?: BatchStatementResponse[];
}
