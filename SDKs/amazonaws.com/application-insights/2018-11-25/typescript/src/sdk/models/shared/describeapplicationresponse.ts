import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationInfo } from "./applicationinfo";



export class DescribeApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationInfo" })
  applicationInfo?: ApplicationInfo;
}
