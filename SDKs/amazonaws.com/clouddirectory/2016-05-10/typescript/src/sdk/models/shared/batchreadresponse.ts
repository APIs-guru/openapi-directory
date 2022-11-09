import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BatchReadOperationResponse } from "./batchreadoperationresponse";


export class BatchReadResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Responses", elemType: shared.BatchReadOperationResponse })
  responses?: BatchReadOperationResponse[];
}
