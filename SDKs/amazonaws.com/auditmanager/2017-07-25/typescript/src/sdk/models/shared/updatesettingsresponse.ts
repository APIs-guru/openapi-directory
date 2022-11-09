import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Settings } from "./settings";


export class UpdateSettingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=settings" })
  settings?: Settings;
}
