import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Control } from "./control";



export class CreateControlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=control" })
  control?: Control;
}
