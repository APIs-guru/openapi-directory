import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FunctionDefaultExecutionConfig } from "./functiondefaultexecutionconfig";



// FunctionDefaultConfig
/** 
 * The default configuration that applies to all Lambda functions in the group. Individual Lambda functions can override these settings.
**/
export class FunctionDefaultConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Execution" })
  execution?: FunctionDefaultExecutionConfig;
}
