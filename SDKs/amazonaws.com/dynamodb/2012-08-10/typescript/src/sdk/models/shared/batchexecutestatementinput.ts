import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BatchStatementRequest } from "./batchstatementrequest";


export class BatchExecuteStatementInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Statements", elemType: shared.BatchStatementRequest })
  statements: BatchStatementRequest[];
}
