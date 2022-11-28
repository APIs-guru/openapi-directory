import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentImage } from "./environmentimage";
import { LanguageTypeEnum } from "./languagetypeenum";



// EnvironmentLanguage
/** 
 * A set of Docker images that are related by programming language and are managed by CodeBuild.
**/
export class EnvironmentLanguage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=images", elemType: EnvironmentImage })
  images?: EnvironmentImage[];

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: LanguageTypeEnum;
}
