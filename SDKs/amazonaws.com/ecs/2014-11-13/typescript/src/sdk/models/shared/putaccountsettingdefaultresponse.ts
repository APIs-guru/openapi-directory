import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Setting } from "./setting";


export class PutAccountSettingDefaultResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=setting" })
  setting?: Setting;
}
