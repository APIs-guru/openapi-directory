import { SpeakeasyBase } from "../../../internal/utils";
import { AccessPreviewStatusReasonCodeEnum } from "./accesspreviewstatusreasoncodeenum";
/**
 * Provides more details about the current status of the access preview. For example, if the creation of the access preview fails, a <code>Failed</code> status is returned. This failure can be due to an internal issue with the analysis or due to an invalid proposed resource configuration.
**/
export declare class AccessPreviewStatusReason extends SpeakeasyBase {
    code: AccessPreviewStatusReasonCodeEnum;
}
