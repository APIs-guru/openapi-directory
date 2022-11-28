import { SpeakeasyBase } from "../../../internal/utils";
import { CancelBatchErrorCodeEnum } from "./cancelbatcherrorcodeenum";
/**
 * Describes a Spot Fleet error.
**/
export declare class CancelSpotFleetRequestsError extends SpeakeasyBase {
    code?: CancelBatchErrorCodeEnum;
    message?: string;
}
