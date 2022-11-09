import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Action } from "./action";


export class GetActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: Action;
}
