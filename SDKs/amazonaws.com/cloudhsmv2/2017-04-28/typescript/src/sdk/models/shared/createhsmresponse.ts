import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Hsm } from "./hsm";


export class CreateHsmResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Hsm" })
  hsm?: Hsm;
}
