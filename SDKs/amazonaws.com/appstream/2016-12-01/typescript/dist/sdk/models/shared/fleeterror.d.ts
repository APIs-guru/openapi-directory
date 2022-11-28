import { SpeakeasyBase } from "../../../internal/utils";
import { FleetErrorCodeEnum } from "./fleeterrorcodeenum";
/**
 * Describes a fleet error.
**/
export declare class FleetError extends SpeakeasyBase {
    errorCode?: FleetErrorCodeEnum;
    errorMessage?: string;
}
