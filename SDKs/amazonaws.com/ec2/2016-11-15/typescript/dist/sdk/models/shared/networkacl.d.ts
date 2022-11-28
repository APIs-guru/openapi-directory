import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkAclAssociation } from "./networkaclassociation";
import { NetworkAclEntry } from "./networkaclentry";
import { Tag } from "./tag";
/**
 * Describes a network ACL.
**/
export declare class NetworkAcl extends SpeakeasyBase {
    associations?: NetworkAclAssociation[];
    entries?: NetworkAclEntry[];
    isDefault?: boolean;
    networkAclId?: string;
    ownerId?: string;
    tags?: Tag[];
    vpcId?: string;
}
