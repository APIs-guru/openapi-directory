import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComponentLatestVersion } from "./componentlatestversion";



// Component
/** 
 * Contains information about a component.
**/
export class Component extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=componentName" })
  componentName?: string;

  @SpeakeasyMetadata({ data: "json, name=latestVersion" })
  latestVersion?: ComponentLatestVersion;
}
