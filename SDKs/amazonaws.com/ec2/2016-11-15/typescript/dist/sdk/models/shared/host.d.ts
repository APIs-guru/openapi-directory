import { SpeakeasyBase } from "../../../internal/utils";
import { AllowsMultipleInstanceTypesEnum } from "./allowsmultipleinstancetypesenum";
import { AutoPlacementEnum } from "./autoplacementenum";
import { AvailableCapacity } from "./availablecapacity";
import { HostProperties } from "./hostproperties";
import { HostRecoveryEnum } from "./hostrecoveryenum";
import { HostInstance } from "./hostinstance";
import { AllocationStateEnum } from "./allocationstateenum";
import { Tag } from "./tag";
/**
 * Describes the properties of the Dedicated Host.
**/
export declare class Host extends SpeakeasyBase {
    allocationTime?: Date;
    allowsMultipleInstanceTypes?: AllowsMultipleInstanceTypesEnum;
    autoPlacement?: AutoPlacementEnum;
    availabilityZone?: string;
    availabilityZoneId?: string;
    availableCapacity?: AvailableCapacity;
    clientToken?: string;
    hostId?: string;
    hostProperties?: HostProperties;
    hostRecovery?: HostRecoveryEnum;
    hostReservationId?: string;
    instances?: HostInstance[];
    memberOfServiceLinkedResourceGroup?: boolean;
    ownerId?: string;
    releaseTime?: Date;
    state?: AllocationStateEnum;
    tags?: Tag[];
}
