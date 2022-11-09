import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BatchStatementResponse } from "./batchstatementresponse";


export class BatchExecuteStatementOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Responses", elemType: shared.BatchStatementResponse })
  responses?: BatchStatementResponse[];
}
