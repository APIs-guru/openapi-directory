import { SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentLanguage } from "./environmentlanguage";
import { PlatformTypeEnum } from "./platformtypeenum";
/**
 * A set of Docker images that are related by platform and are managed by CodeBuild.
**/
export declare class EnvironmentPlatform extends SpeakeasyBase {
    languages?: EnvironmentLanguage[];
    platform?: PlatformTypeEnum;
}
