import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationOptionDescription } from "./configurationoptiondescription";
/**
 * Describes the settings for a specified configuration set.
**/
export declare class ConfigurationOptionsDescription extends SpeakeasyBase {
    options?: ConfigurationOptionDescription[];
    platformArn?: string;
    solutionStackName?: string;
}
