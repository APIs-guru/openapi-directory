import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Settings } from "./settings";



export class GetSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: Settings;
}
