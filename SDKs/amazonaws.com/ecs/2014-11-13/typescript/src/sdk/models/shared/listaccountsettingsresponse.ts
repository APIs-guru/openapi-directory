import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Setting } from "./setting";



export class ListAccountSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=settings", elemType: Setting })
  settings?: Setting[];
}
