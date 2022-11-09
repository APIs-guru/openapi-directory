import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CodeConfigurationValues } from "./codeconfigurationvalues";
import { ConfigurationSourceEnum } from "./configurationsourceenum";


// CodeConfiguration
/** 
 * Describes the configuration that AWS App Runner uses to build and run an App Runner service from a source code repository.
**/
export class CodeConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=CodeConfigurationValues" })
  codeConfigurationValues?: CodeConfigurationValues;

  @Metadata({ data: "json, name=ConfigurationSource" })
  configurationSource: ConfigurationSourceEnum;
}
