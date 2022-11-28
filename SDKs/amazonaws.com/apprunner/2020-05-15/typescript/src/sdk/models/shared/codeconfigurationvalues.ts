import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuntimeEnum } from "./runtimeenum";



// CodeConfigurationValues
/** 
 * Describes the basic configuration needed for building and running an AWS App Runner service. This type doesn't support the full set of possible configuration options. Fur full configuration capabilities, use a <code>apprunner.yaml</code> file in the source code repository.
**/
export class CodeConfigurationValues extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BuildCommand" })
  buildCommand?: string;

  @SpeakeasyMetadata({ data: "json, name=Port" })
  port?: string;

  @SpeakeasyMetadata({ data: "json, name=Runtime" })
  runtime: RuntimeEnum;

  @SpeakeasyMetadata({ data: "json, name=RuntimeEnvironmentVariables" })
  runtimeEnvironmentVariables?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=StartCommand" })
  startCommand?: string;
}
