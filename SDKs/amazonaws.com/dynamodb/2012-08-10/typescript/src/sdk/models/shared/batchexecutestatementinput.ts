import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchStatementRequest } from "./batchstatementrequest";



export class BatchExecuteStatementInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Statements", elemType: BatchStatementRequest })
  statements: BatchStatementRequest[];
}
