import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnvironmentLanguage } from "./environmentlanguage";
import { PlatformTypeEnum } from "./platformtypeenum";


// EnvironmentPlatform
/** 
 * A set of Docker images that are related by platform and are managed by CodeBuild.
**/
export class EnvironmentPlatform extends SpeakeasyBase {
  @Metadata({ data: "json, name=languages", elemType: shared.EnvironmentLanguage })
  languages?: EnvironmentLanguage[];

  @Metadata({ data: "json, name=platform" })
  platform?: PlatformTypeEnum;
}
