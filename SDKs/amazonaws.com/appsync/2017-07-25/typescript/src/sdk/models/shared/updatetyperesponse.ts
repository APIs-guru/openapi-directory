import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Type } from "./type";



export class UpdateTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: Type;
}
