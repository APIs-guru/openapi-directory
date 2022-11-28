import { SpeakeasyBase } from "../../../internal/utils";
import { EncodingTypeEnum } from "./encodingtypeenum";
import { FunctionConfigurationEnvironment } from "./functionconfigurationenvironment";
/**
 * The configuration of the Lambda function.
**/
export declare class FunctionConfiguration extends SpeakeasyBase {
    encodingType?: EncodingTypeEnum;
    environment?: FunctionConfigurationEnvironment;
    execArgs?: string;
    executable?: string;
    memorySize?: number;
    pinned?: boolean;
    timeout?: number;
}
