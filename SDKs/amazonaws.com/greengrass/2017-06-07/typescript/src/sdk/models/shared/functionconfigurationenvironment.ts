import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FunctionExecutionConfig } from "./functionexecutionconfig";
import { ResourceAccessPolicy } from "./resourceaccesspolicy";


// FunctionConfigurationEnvironment
/** 
 * The environment configuration of the function.
**/
export class FunctionConfigurationEnvironment extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessSysfs" })
  accessSysfs?: boolean;

  @Metadata({ data: "json, name=Execution" })
  execution?: FunctionExecutionConfig;

  @Metadata({ data: "json, name=ResourceAccessPolicies", elemType: shared.ResourceAccessPolicy })
  resourceAccessPolicies?: ResourceAccessPolicy[];

  @Metadata({ data: "json, name=Variables" })
  variables?: Map<string, string>;
}
