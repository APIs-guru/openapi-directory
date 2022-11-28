import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Type } from "./type";



export class CreateTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: Type;
}
