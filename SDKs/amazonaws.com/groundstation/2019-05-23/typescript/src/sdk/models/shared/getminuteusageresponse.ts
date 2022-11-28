import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetMinuteUsageResponse
/** 
 * <p/>
**/
export class GetMinuteUsageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=estimatedMinutesRemaining" })
  estimatedMinutesRemaining?: number;

  @SpeakeasyMetadata({ data: "json, name=isReservedMinutesCustomer" })
  isReservedMinutesCustomer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=totalReservedMinuteAllocation" })
  totalReservedMinuteAllocation?: number;

  @SpeakeasyMetadata({ data: "json, name=totalScheduledMinutes" })
  totalScheduledMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=upcomingMinutesScheduled" })
  upcomingMinutesScheduled?: number;
}
