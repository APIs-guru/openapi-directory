import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FunctionIsolationModeEnum } from "./functionisolationmodeenum";
import { FunctionRunAsConfig } from "./functionrunasconfig";


// FunctionDefaultExecutionConfig
/** 
 * Configuration information that specifies how a Lambda function runs. 
**/
export class FunctionDefaultExecutionConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=IsolationMode" })
  isolationMode?: FunctionIsolationModeEnum;

  @Metadata({ data: "json, name=RunAs" })
  runAs?: FunctionRunAsConfig;
}
