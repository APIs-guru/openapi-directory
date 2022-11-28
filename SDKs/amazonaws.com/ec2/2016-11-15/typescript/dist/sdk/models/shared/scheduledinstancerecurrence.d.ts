import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the recurring schedule for a Scheduled Instance.
**/
export declare class ScheduledInstanceRecurrence extends SpeakeasyBase {
    frequency?: string;
    interval?: number;
    occurrenceDaySet?: number[];
    occurrenceRelativeToEnd?: boolean;
    occurrenceUnit?: string;
}
