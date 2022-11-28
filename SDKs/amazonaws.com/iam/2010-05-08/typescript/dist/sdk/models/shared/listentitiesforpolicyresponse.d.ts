import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyGroup } from "./policygroup";
import { PolicyRole } from "./policyrole";
import { PolicyUser } from "./policyuser";
/**
 * Contains the response to a successful <a>ListEntitiesForPolicy</a> request.
**/
export declare class ListEntitiesForPolicyResponse extends SpeakeasyBase {
    isTruncated?: boolean;
    marker?: string;
    policyGroups?: PolicyGroup[];
    policyRoles?: PolicyRole[];
    policyUsers?: PolicyUser[];
}
