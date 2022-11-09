import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Settings } from "./settings";


export class GetSettingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=settings" })
  settings?: Settings;
}
