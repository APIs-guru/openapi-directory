import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Hsm } from "./hsm";



export class CreateHsmResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Hsm" })
  hsm?: Hsm;
}
