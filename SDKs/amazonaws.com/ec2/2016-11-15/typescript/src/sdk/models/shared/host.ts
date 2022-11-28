import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AllowsMultipleInstanceTypesEnum } from "./allowsmultipleinstancetypesenum";
import { AutoPlacementEnum } from "./autoplacementenum";
import { AvailableCapacity } from "./availablecapacity";
import { HostProperties } from "./hostproperties";
import { HostRecoveryEnum } from "./hostrecoveryenum";
import { HostInstance } from "./hostinstance";
import { AllocationStateEnum } from "./allocationstateenum";
import { Tag } from "./tag";



// Host
/** 
 * Describes the properties of the Dedicated Host.
**/
export class Host extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allocationTime?: Date;

  @SpeakeasyMetadata()
  allowsMultipleInstanceTypes?: AllowsMultipleInstanceTypesEnum;

  @SpeakeasyMetadata()
  autoPlacement?: AutoPlacementEnum;

  @SpeakeasyMetadata()
  availabilityZone?: string;

  @SpeakeasyMetadata()
  availabilityZoneId?: string;

  @SpeakeasyMetadata()
  availableCapacity?: AvailableCapacity;

  @SpeakeasyMetadata()
  clientToken?: string;

  @SpeakeasyMetadata()
  hostId?: string;

  @SpeakeasyMetadata()
  hostProperties?: HostProperties;

  @SpeakeasyMetadata()
  hostRecovery?: HostRecoveryEnum;

  @SpeakeasyMetadata()
  hostReservationId?: string;

  @SpeakeasyMetadata({ elemType: HostInstance })
  instances?: HostInstance[];

  @SpeakeasyMetadata()
  memberOfServiceLinkedResourceGroup?: boolean;

  @SpeakeasyMetadata()
  ownerId?: string;

  @SpeakeasyMetadata()
  releaseTime?: Date;

  @SpeakeasyMetadata()
  state?: AllocationStateEnum;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
