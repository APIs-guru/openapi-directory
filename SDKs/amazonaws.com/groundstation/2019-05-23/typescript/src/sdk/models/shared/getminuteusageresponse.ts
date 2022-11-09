import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetMinuteUsageResponse
/** 
 * <p/>
**/
export class GetMinuteUsageResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=estimatedMinutesRemaining" })
  estimatedMinutesRemaining?: number;

  @Metadata({ data: "json, name=isReservedMinutesCustomer" })
  isReservedMinutesCustomer?: boolean;

  @Metadata({ data: "json, name=totalReservedMinuteAllocation" })
  totalReservedMinuteAllocation?: number;

  @Metadata({ data: "json, name=totalScheduledMinutes" })
  totalScheduledMinutes?: number;

  @Metadata({ data: "json, name=upcomingMinutesScheduled" })
  upcomingMinutesScheduled?: number;
}
