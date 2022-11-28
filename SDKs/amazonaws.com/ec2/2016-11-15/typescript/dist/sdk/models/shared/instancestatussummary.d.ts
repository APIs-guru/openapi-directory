import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceStatusDetails } from "./instancestatusdetails";
import { SummaryStatusEnum } from "./summarystatusenum";
/**
 * Describes the status of an instance.
**/
export declare class InstanceStatusSummary extends SpeakeasyBase {
    details?: InstanceStatusDetails[];
    status?: SummaryStatusEnum;
}
