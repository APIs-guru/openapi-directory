import { SpeakeasyBase } from "../../../internal/utils";
import { LifecycleErrorCodeEnum } from "./lifecycleerrorcodeenum";
/**
 * Diagnostic information about executable scripts that are part of a deployment.
**/
export declare class Diagnostics extends SpeakeasyBase {
    errorCode?: LifecycleErrorCodeEnum;
    logTail?: string;
    message?: string;
    scriptName?: string;
}
