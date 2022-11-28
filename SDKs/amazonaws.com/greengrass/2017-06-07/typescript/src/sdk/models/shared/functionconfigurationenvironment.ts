import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FunctionExecutionConfig } from "./functionexecutionconfig";
import { ResourceAccessPolicy } from "./resourceaccesspolicy";



// FunctionConfigurationEnvironment
/** 
 * The environment configuration of the function.
**/
export class FunctionConfigurationEnvironment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessSysfs" })
  accessSysfs?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Execution" })
  execution?: FunctionExecutionConfig;

  @SpeakeasyMetadata({ data: "json, name=ResourceAccessPolicies", elemType: ResourceAccessPolicy })
  resourceAccessPolicies?: ResourceAccessPolicy[];

  @SpeakeasyMetadata({ data: "json, name=Variables" })
  variables?: Map<string, string>;
}
