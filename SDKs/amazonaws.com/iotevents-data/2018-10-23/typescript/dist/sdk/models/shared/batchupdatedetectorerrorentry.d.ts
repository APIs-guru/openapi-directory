import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorCodeEnum } from "./errorcodeenum";
/**
 * Information about the error that occurred when attempting to update a detector.
**/
export declare class BatchUpdateDetectorErrorEntry extends SpeakeasyBase {
    errorCode?: ErrorCodeEnum;
    errorMessage?: string;
    messageId?: string;
}
