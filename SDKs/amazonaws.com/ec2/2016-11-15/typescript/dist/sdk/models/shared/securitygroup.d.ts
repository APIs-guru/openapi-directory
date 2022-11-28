import { SpeakeasyBase } from "../../../internal/utils";
import { IpPermission } from "./ippermission";
import { Tag } from "./tag";
/**
 * Describes a security group.
**/
export declare class SecurityGroup extends SpeakeasyBase {
    description?: string;
    groupId?: string;
    groupName?: string;
    ipPermissions?: IpPermission[];
    ipPermissionsEgress?: IpPermission[];
    ownerId?: string;
    tags?: Tag[];
    vpcId?: string;
}
