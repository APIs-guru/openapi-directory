import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RuntimeEnum } from "./runtimeenum";


// CodeConfigurationValues
/** 
 * Describes the basic configuration needed for building and running an AWS App Runner service. This type doesn't support the full set of possible configuration options. Fur full configuration capabilities, use a <code>apprunner.yaml</code> file in the source code repository.
**/
export class CodeConfigurationValues extends SpeakeasyBase {
  @Metadata({ data: "json, name=BuildCommand" })
  buildCommand?: string;

  @Metadata({ data: "json, name=Port" })
  port?: string;

  @Metadata({ data: "json, name=Runtime" })
  runtime: RuntimeEnum;

  @Metadata({ data: "json, name=RuntimeEnvironmentVariables" })
  runtimeEnvironmentVariables?: Map<string, string>;

  @Metadata({ data: "json, name=StartCommand" })
  startCommand?: string;
}
