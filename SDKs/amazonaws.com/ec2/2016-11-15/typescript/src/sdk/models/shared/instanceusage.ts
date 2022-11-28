import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstanceUsage
/** 
 * Information about the Capacity Reservation usage.
**/
export class InstanceUsage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accountId?: string;

  @SpeakeasyMetadata()
  usedInstanceCount?: number;
}
