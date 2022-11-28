import { SpeakeasyBase } from "../../../internal/utils";
import { IpPermission } from "./ippermission";
export declare class RevokeSecurityGroupEgressResult extends SpeakeasyBase {
    return?: boolean;
    unknownIpPermissions?: IpPermission[];
}
