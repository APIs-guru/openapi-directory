import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Settings } from "./settings";



export class UpdateSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: Settings;
}
