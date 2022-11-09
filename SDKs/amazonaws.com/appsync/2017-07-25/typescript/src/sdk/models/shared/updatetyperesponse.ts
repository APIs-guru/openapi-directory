import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Type } from "./type";


export class UpdateTypeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: Type;
}
