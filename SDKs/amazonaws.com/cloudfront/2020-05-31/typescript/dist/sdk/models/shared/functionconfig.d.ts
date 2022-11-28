import { SpeakeasyBase } from "../../../internal/utils";
import { FunctionRuntimeEnum } from "./functionruntimeenum";
/**
 * Contains configuration information about a CloudFront function.
**/
export declare class FunctionConfig extends SpeakeasyBase {
    comment: string;
    runtime: FunctionRuntimeEnum;
}
