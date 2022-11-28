import { SpeakeasyBase } from "../../../internal/utils";
import { DeleteQueuedReservedInstancesErrorCodeEnum } from "./deletequeuedreservedinstanceserrorcodeenum";
/**
 * Describes the error for a Reserved Instance whose queued purchase could not be deleted.
**/
export declare class DeleteQueuedReservedInstancesError extends SpeakeasyBase {
    code?: DeleteQueuedReservedInstancesErrorCodeEnum;
    message?: string;
}
