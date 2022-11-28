import { SpeakeasyBase } from "../../../internal/utils";
import { ScheduledInstance } from "./scheduledinstance";
/**
 * Contains the output of DescribeScheduledInstances.
**/
export declare class DescribeScheduledInstancesResult extends SpeakeasyBase {
    nextToken?: string;
    scheduledInstanceSet?: ScheduledInstance[];
}
