import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceCredentials } from "./instancecredentials";
import { OperatingSystemEnum } from "./operatingsystemenum";



// InstanceAccess
/** 
 * Information required to remotely connect to a fleet instance. Access is requested by calling <a>GetInstanceAccess</a>. 
**/
export class InstanceAccess extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Credentials" })
  credentials?: InstanceCredentials;

  @SpeakeasyMetadata({ data: "json, name=FleetId" })
  fleetId?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=IpAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=OperatingSystem" })
  operatingSystem?: OperatingSystemEnum;
}
