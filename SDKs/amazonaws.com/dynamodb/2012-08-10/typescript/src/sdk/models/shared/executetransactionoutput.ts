import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ItemResponse } from "./itemresponse";


export class ExecuteTransactionOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Responses", elemType: shared.ItemResponse })
  responses?: ItemResponse[];
}
