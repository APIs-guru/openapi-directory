import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Stack } from "./stack";


export class UpdateStackResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Stack" })
  stack?: Stack;
}
