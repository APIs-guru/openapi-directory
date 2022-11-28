import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentLanguage } from "./environmentlanguage";
import { PlatformTypeEnum } from "./platformtypeenum";



// EnvironmentPlatform
/** 
 * A set of Docker images that are related by platform and are managed by CodeBuild.
**/
export class EnvironmentPlatform extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=languages", elemType: EnvironmentLanguage })
  languages?: EnvironmentLanguage[];

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform?: PlatformTypeEnum;
}
