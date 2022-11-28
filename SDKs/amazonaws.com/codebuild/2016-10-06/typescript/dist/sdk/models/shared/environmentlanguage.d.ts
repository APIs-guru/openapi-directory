import { SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentImage } from "./environmentimage";
import { LanguageTypeEnum } from "./languagetypeenum";
/**
 * A set of Docker images that are related by programming language and are managed by CodeBuild.
**/
export declare class EnvironmentLanguage extends SpeakeasyBase {
    images?: EnvironmentImage[];
    language?: LanguageTypeEnum;
}
