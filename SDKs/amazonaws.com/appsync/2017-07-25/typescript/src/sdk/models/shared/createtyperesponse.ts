import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Type } from "./type";


export class CreateTypeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: Type;
}
