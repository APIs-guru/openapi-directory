import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Type } from "./type";


export class GetTypeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: Type;
}
