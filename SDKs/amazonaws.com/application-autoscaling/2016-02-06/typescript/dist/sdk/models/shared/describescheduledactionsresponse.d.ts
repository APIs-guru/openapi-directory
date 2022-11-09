import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ScheduledAction } from "./scheduledaction";
export declare class DescribeScheduledActionsResponse extends SpeakeasyBase {
    nextToken?: string;
    scheduledActions?: ScheduledAction[];
}
