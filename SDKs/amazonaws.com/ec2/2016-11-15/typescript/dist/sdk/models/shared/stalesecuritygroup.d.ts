import { SpeakeasyBase } from "../../../internal/utils";
import { StaleIpPermission } from "./staleippermission";
/**
 * Describes a stale security group (a security group that contains stale rules).
**/
export declare class StaleSecurityGroup extends SpeakeasyBase {
    description?: string;
    groupId?: string;
    groupName?: string;
    staleIpPermissions?: StaleIpPermission[];
    staleIpPermissionsEgress?: StaleIpPermission[];
    vpcId?: string;
}
