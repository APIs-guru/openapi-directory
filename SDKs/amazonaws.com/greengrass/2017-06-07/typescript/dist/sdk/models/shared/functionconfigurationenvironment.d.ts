import { SpeakeasyBase } from "../../../internal/utils";
import { FunctionExecutionConfig } from "./functionexecutionconfig";
import { ResourceAccessPolicy } from "./resourceaccesspolicy";
/**
 * The environment configuration of the function.
**/
export declare class FunctionConfigurationEnvironment extends SpeakeasyBase {
    accessSysfs?: boolean;
    execution?: FunctionExecutionConfig;
    resourceAccessPolicies?: ResourceAccessPolicy[];
    variables?: Map<string, string>;
}
