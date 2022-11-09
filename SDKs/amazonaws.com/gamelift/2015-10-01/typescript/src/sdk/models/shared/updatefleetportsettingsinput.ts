import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IpPermission } from "./ippermission";
import { IpPermission } from "./ippermission";


// UpdateFleetPortSettingsInput
/** 
 * Represents the input for a request operation.
**/
export class UpdateFleetPortSettingsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=FleetId" })
  fleetId: string;

  @Metadata({ data: "json, name=InboundPermissionAuthorizations", elemType: shared.IpPermission })
  inboundPermissionAuthorizations?: IpPermission[];

  @Metadata({ data: "json, name=InboundPermissionRevocations", elemType: shared.IpPermission })
  inboundPermissionRevocations?: IpPermission[];
}
