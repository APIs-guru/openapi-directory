import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndDateTypeEnum } from "./enddatetypeenum";
import { InstanceMatchCriteriaEnum } from "./instancematchcriteriaenum";
import { CapacityReservationInstancePlatformEnum } from "./capacityreservationinstanceplatformenum";
import { CapacityReservationStateEnum } from "./capacityreservationstateenum";
import { Tag } from "./tag";
import { CapacityReservationTenancyEnum } from "./capacityreservationtenancyenum";



// CapacityReservation
/** 
 * Describes a Capacity Reservation.
**/
export class CapacityReservation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  availabilityZone?: string;

  @SpeakeasyMetadata()
  availabilityZoneId?: string;

  @SpeakeasyMetadata()
  availableInstanceCount?: number;

  @SpeakeasyMetadata()
  capacityReservationArn?: string;

  @SpeakeasyMetadata()
  capacityReservationId?: string;

  @SpeakeasyMetadata()
  createDate?: Date;

  @SpeakeasyMetadata()
  ebsOptimized?: boolean;

  @SpeakeasyMetadata()
  endDate?: Date;

  @SpeakeasyMetadata()
  endDateType?: EndDateTypeEnum;

  @SpeakeasyMetadata()
  ephemeralStorage?: boolean;

  @SpeakeasyMetadata()
  instanceMatchCriteria?: InstanceMatchCriteriaEnum;

  @SpeakeasyMetadata()
  instancePlatform?: CapacityReservationInstancePlatformEnum;

  @SpeakeasyMetadata()
  instanceType?: string;

  @SpeakeasyMetadata()
  outpostArn?: string;

  @SpeakeasyMetadata()
  ownerId?: string;

  @SpeakeasyMetadata()
  startDate?: Date;

  @SpeakeasyMetadata()
  state?: CapacityReservationStateEnum;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  tenancy?: CapacityReservationTenancyEnum;

  @SpeakeasyMetadata()
  totalInstanceCount?: number;
}
