import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityZoneMessage } from "./availabilityzonemessage";
import { AvailabilityZoneOptInStatusEnum } from "./availabilityzoneoptinstatusenum";
import { AvailabilityZoneStateEnum } from "./availabilityzonestateenum";



// AvailabilityZone
/** 
 * Describes Availability Zones, Local Zones, and Wavelength Zones.
**/
export class AvailabilityZone extends SpeakeasyBase {
  @SpeakeasyMetadata()
  groupName?: string;

  @SpeakeasyMetadata({ elemType: AvailabilityZoneMessage })
  messages?: AvailabilityZoneMessage[];

  @SpeakeasyMetadata()
  networkBorderGroup?: string;

  @SpeakeasyMetadata()
  optInStatus?: AvailabilityZoneOptInStatusEnum;

  @SpeakeasyMetadata()
  parentZoneId?: string;

  @SpeakeasyMetadata()
  parentZoneName?: string;

  @SpeakeasyMetadata()
  regionName?: string;

  @SpeakeasyMetadata()
  state?: AvailabilityZoneStateEnum;

  @SpeakeasyMetadata()
  zoneId?: string;

  @SpeakeasyMetadata()
  zoneName?: string;

  @SpeakeasyMetadata()
  zoneType?: string;
}
