import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Stack } from "./stack";



export class CreateStackResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Stack" })
  stack?: Stack;
}
