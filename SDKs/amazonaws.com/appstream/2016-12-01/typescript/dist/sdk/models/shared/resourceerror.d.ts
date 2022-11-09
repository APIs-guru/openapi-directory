import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FleetErrorCodeEnum } from "./fleeterrorcodeenum";
/**
 * Describes a resource error.
**/
export declare class ResourceError extends SpeakeasyBase {
    errorCode?: FleetErrorCodeEnum;
    errorMessage?: string;
    errorTimestamp?: Date;
}
