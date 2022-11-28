import { SpeakeasyBase } from "../../../internal/utils";
import { ReasonCodeEnum } from "./reasoncodeenum";
/**
 * Provides more details about the current status of the analyzer. For example, if the creation for the analyzer fails, a <code>Failed</code> status is returned. For an analyzer with organization as the type, this failure can be due to an issue with creating the service-linked roles required in the member accounts of the Amazon Web Services organization.
**/
export declare class StatusReason extends SpeakeasyBase {
    code: ReasonCodeEnum;
}
