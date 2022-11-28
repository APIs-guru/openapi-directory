import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceCount } from "./instancecount";
import { PriceSchedule } from "./priceschedule";
import { ListingStatusEnum } from "./listingstatusenum";
import { Tag } from "./tag";
/**
 * Describes a Reserved Instance listing.
**/
export declare class ReservedInstancesListing extends SpeakeasyBase {
    clientToken?: string;
    createDate?: Date;
    instanceCounts?: InstanceCount[];
    priceSchedules?: PriceSchedule[];
    reservedInstancesId?: string;
    reservedInstancesListingId?: string;
    status?: ListingStatusEnum;
    statusMessage?: string;
    tags?: Tag[];
    updateDate?: Date;
}
