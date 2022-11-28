import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorCodeEnum } from "./errorcodeenum";
/**
 * Contains information about the errors encountered.
**/
export declare class BatchPutMessageErrorEntry extends SpeakeasyBase {
    errorCode?: ErrorCodeEnum;
    errorMessage?: string;
    messageId?: string;
}
