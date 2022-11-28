import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Setting } from "./setting";



export class PutAccountSettingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=setting" })
  setting?: Setting;
}
