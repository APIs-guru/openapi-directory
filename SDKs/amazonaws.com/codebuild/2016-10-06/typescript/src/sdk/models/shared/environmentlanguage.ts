import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnvironmentImage } from "./environmentimage";
import { LanguageTypeEnum } from "./languagetypeenum";


// EnvironmentLanguage
/** 
 * A set of Docker images that are related by programming language and are managed by CodeBuild.
**/
export class EnvironmentLanguage extends SpeakeasyBase {
  @Metadata({ data: "json, name=images", elemType: shared.EnvironmentImage })
  images?: EnvironmentImage[];

  @Metadata({ data: "json, name=language" })
  language?: LanguageTypeEnum;
}
