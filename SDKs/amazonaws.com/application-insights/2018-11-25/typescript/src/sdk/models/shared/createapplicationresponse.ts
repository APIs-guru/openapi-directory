import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApplicationInfo } from "./applicationinfo";


export class CreateApplicationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationInfo" })
  applicationInfo?: ApplicationInfo;
}
