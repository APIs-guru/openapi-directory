import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p/>
**/
export declare class GetMinuteUsageResponse extends SpeakeasyBase {
    estimatedMinutesRemaining?: number;
    isReservedMinutesCustomer?: boolean;
    totalReservedMinuteAllocation?: number;
    totalScheduledMinutes?: number;
    upcomingMinutesScheduled?: number;
}
