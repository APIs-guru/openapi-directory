import { SpeakeasyBase } from "../../../internal/utils";
import { IpPermission } from "./ippermission";
import { LocationUpdateStatusEnum } from "./locationupdatestatusenum";
/**
 * Represents the returned data in response to a request operation.
**/
export declare class DescribeFleetPortSettingsOutput extends SpeakeasyBase {
    fleetArn?: string;
    fleetId?: string;
    inboundPermissions?: IpPermission[];
    location?: string;
    updateStatus?: LocationUpdateStatusEnum;
}
