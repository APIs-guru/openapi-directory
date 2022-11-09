import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Grantee } from "./grantee";
import { PermissionEnum } from "./permissionenum";
/**
 * Contains information about a grant.
**/
export declare class Grant extends SpeakeasyBase {
    grantee?: Grantee;
    permission?: PermissionEnum;
}
