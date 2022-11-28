import { SpeakeasyBase } from "../../../internal/utils";
import { CancelStepsRequestStatusEnum } from "./cancelstepsrequeststatusenum";
/**
 * Specification of the status of a CancelSteps request. Available only in Amazon EMR version 4.8.0 and later, excluding version 5.0.0.
**/
export declare class CancelStepsInfo extends SpeakeasyBase {
    reason?: string;
    status?: CancelStepsRequestStatusEnum;
    stepId?: string;
}
