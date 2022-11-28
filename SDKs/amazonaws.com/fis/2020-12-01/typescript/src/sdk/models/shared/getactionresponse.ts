import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";



export class GetActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: Action;
}
