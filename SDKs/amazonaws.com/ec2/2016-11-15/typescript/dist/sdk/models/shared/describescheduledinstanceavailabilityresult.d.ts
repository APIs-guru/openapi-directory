import { SpeakeasyBase } from "../../../internal/utils";
import { ScheduledInstanceAvailability } from "./scheduledinstanceavailability";
/**
 * Contains the output of DescribeScheduledInstanceAvailability.
**/
export declare class DescribeScheduledInstanceAvailabilityResult extends SpeakeasyBase {
    nextToken?: string;
    scheduledInstanceAvailabilitySet?: ScheduledInstanceAvailability[];
}
