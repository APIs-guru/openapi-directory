import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IpPermission } from "./ippermission";



// UpdateFleetPortSettingsInput
/** 
 * Represents the input for a request operation.
**/
export class UpdateFleetPortSettingsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FleetId" })
  fleetId: string;

  @SpeakeasyMetadata({ data: "json, name=InboundPermissionAuthorizations", elemType: IpPermission })
  inboundPermissionAuthorizations?: IpPermission[];

  @SpeakeasyMetadata({ data: "json, name=InboundPermissionRevocations", elemType: IpPermission })
  inboundPermissionRevocations?: IpPermission[];
}
