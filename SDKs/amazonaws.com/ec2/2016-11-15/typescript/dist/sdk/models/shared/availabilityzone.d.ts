import { SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityZoneMessage } from "./availabilityzonemessage";
import { AvailabilityZoneOptInStatusEnum } from "./availabilityzoneoptinstatusenum";
import { AvailabilityZoneStateEnum } from "./availabilityzonestateenum";
/**
 * Describes Availability Zones, Local Zones, and Wavelength Zones.
**/
export declare class AvailabilityZone extends SpeakeasyBase {
    groupName?: string;
    messages?: AvailabilityZoneMessage[];
    networkBorderGroup?: string;
    optInStatus?: AvailabilityZoneOptInStatusEnum;
    parentZoneId?: string;
    parentZoneName?: string;
    regionName?: string;
    state?: AvailabilityZoneStateEnum;
    zoneId?: string;
    zoneName?: string;
    zoneType?: string;
}
