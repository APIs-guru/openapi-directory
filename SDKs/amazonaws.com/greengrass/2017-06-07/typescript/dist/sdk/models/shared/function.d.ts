import { SpeakeasyBase } from "../../../internal/utils";
import { FunctionConfiguration } from "./functionconfiguration";
/**
 * Information about a Lambda function.
**/
export declare class Function extends SpeakeasyBase {
    functionArn?: string;
    functionConfiguration?: FunctionConfiguration;
    id: string;
}
