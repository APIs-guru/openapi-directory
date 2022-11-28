import { SpeakeasyBase } from "../../../internal/utils";
import { FunctionIsolationModeEnum } from "./functionisolationmodeenum";
import { FunctionRunAsConfig } from "./functionrunasconfig";
/**
 * Configuration information that specifies how a Lambda function runs.
**/
export declare class FunctionDefaultExecutionConfig extends SpeakeasyBase {
    isolationMode?: FunctionIsolationModeEnum;
    runAs?: FunctionRunAsConfig;
}
