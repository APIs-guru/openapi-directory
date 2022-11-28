import { SpeakeasyBase } from "../../../internal/utils";
import { IpPermission } from "./ippermission";
/**
 * Represents the input for a request operation.
**/
export declare class UpdateFleetPortSettingsInput extends SpeakeasyBase {
    fleetId: string;
    inboundPermissionAuthorizations?: IpPermission[];
    inboundPermissionRevocations?: IpPermission[];
}
