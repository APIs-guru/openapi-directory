import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RuntimeEnum } from "./runtimeenum";
/**
 * Describes the basic configuration needed for building and running an AWS App Runner service. This type doesn't support the full set of possible configuration options. Fur full configuration capabilities, use a <code>apprunner.yaml</code> file in the source code repository.
**/
export declare class CodeConfigurationValues extends SpeakeasyBase {
    buildCommand?: string;
    port?: string;
    runtime: RuntimeEnum;
    runtimeEnvironmentVariables?: Map<string, string>;
    startCommand?: string;
}
