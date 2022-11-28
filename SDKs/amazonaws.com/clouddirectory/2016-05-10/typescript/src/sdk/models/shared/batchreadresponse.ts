import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchReadOperationResponse } from "./batchreadoperationresponse";



export class BatchReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Responses", elemType: BatchReadOperationResponse })
  responses?: BatchReadOperationResponse[];
}
