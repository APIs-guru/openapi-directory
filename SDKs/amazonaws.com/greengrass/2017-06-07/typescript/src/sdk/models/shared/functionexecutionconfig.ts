import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FunctionIsolationModeEnum } from "./functionisolationmodeenum";
import { FunctionRunAsConfig } from "./functionrunasconfig";



// FunctionExecutionConfig
/** 
 * Configuration information that specifies how a Lambda function runs. 
**/
export class FunctionExecutionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IsolationMode" })
  isolationMode?: FunctionIsolationModeEnum;

  @SpeakeasyMetadata({ data: "json, name=RunAs" })
  runAs?: FunctionRunAsConfig;
}
