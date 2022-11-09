import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CodeConfigurationValues } from "./codeconfigurationvalues";
import { ConfigurationSourceEnum } from "./configurationsourceenum";
/**
 * Describes the configuration that AWS App Runner uses to build and run an App Runner service from a source code repository.
**/
export declare class CodeConfiguration extends SpeakeasyBase {
    codeConfigurationValues?: CodeConfigurationValues;
    configurationSource: ConfigurationSourceEnum;
}
