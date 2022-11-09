import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ComponentLatestVersion } from "./componentlatestversion";


// Component
/** 
 * Contains information about a component.
**/
export class Component extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=componentName" })
  componentName?: string;

  @Metadata({ data: "json, name=latestVersion" })
  latestVersion?: ComponentLatestVersion;
}
