import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceCount } from "./instancecount";
import { PriceSchedule } from "./priceschedule";
import { ListingStatusEnum } from "./listingstatusenum";
import { Tag } from "./tag";



// ReservedInstancesListing
/** 
 * Describes a Reserved Instance listing.
**/
export class ReservedInstancesListing extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientToken?: string;

  @SpeakeasyMetadata()
  createDate?: Date;

  @SpeakeasyMetadata({ elemType: InstanceCount })
  instanceCounts?: InstanceCount[];

  @SpeakeasyMetadata({ elemType: PriceSchedule })
  priceSchedules?: PriceSchedule[];

  @SpeakeasyMetadata()
  reservedInstancesId?: string;

  @SpeakeasyMetadata()
  reservedInstancesListingId?: string;

  @SpeakeasyMetadata()
  status?: ListingStatusEnum;

  @SpeakeasyMetadata()
  statusMessage?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  updateDate?: Date;
}
