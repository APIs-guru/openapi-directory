import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceCredentials } from "./instancecredentials";
import { OperatingSystemEnum } from "./operatingsystemenum";


// InstanceAccess
/** 
 * Information required to remotely connect to a fleet instance. Access is requested by calling <a>GetInstanceAccess</a>. 
**/
export class InstanceAccess extends SpeakeasyBase {
  @Metadata({ data: "json, name=Credentials" })
  credentials?: InstanceCredentials;

  @Metadata({ data: "json, name=FleetId" })
  fleetId?: string;

  @Metadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=IpAddress" })
  ipAddress?: string;

  @Metadata({ data: "json, name=OperatingSystem" })
  operatingSystem?: OperatingSystemEnum;
}
