import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ItemResponse } from "./itemresponse";



export class ExecuteTransactionOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Responses", elemType: ItemResponse })
  responses?: ItemResponse[];
}
