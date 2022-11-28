import { SpeakeasyBase } from "../../../internal/utils";
import { FailedItemErrorCodeEnum } from "./faileditemerrorcodeenum";
/**
 * Includes details about the failed items.
**/
export declare class FailedItemDetails extends SpeakeasyBase {
    failureCode: FailedItemErrorCodeEnum;
    retryable: boolean;
}
