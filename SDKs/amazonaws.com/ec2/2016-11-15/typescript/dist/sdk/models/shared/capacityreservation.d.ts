import { SpeakeasyBase } from "../../../internal/utils";
import { EndDateTypeEnum } from "./enddatetypeenum";
import { InstanceMatchCriteriaEnum } from "./instancematchcriteriaenum";
import { CapacityReservationInstancePlatformEnum } from "./capacityreservationinstanceplatformenum";
import { CapacityReservationStateEnum } from "./capacityreservationstateenum";
import { Tag } from "./tag";
import { CapacityReservationTenancyEnum } from "./capacityreservationtenancyenum";
/**
 * Describes a Capacity Reservation.
**/
export declare class CapacityReservation extends SpeakeasyBase {
    availabilityZone?: string;
    availabilityZoneId?: string;
    availableInstanceCount?: number;
    capacityReservationArn?: string;
    capacityReservationId?: string;
    createDate?: Date;
    ebsOptimized?: boolean;
    endDate?: Date;
    endDateType?: EndDateTypeEnum;
    ephemeralStorage?: boolean;
    instanceMatchCriteria?: InstanceMatchCriteriaEnum;
    instancePlatform?: CapacityReservationInstancePlatformEnum;
    instanceType?: string;
    outpostArn?: string;
    ownerId?: string;
    startDate?: Date;
    state?: CapacityReservationStateEnum;
    tags?: Tag[];
    tenancy?: CapacityReservationTenancyEnum;
    totalInstanceCount?: number;
}
