import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationInfo } from "./applicationinfo";



export class UpdateApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationInfo" })
  applicationInfo?: ApplicationInfo;
}
