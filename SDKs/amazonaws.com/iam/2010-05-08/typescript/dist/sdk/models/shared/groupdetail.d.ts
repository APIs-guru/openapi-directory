import { SpeakeasyBase } from "../../../internal/utils";
import { AttachedPolicy } from "./attachedpolicy";
import { PolicyDetail } from "./policydetail";
/**
 * <p>Contains information about an IAM group, including all of the group's policies.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
**/
export declare class GroupDetail extends SpeakeasyBase {
    arn?: string;
    attachedManagedPolicies?: AttachedPolicy[];
    createDate?: Date;
    groupId?: string;
    groupName?: string;
    groupPolicyList?: PolicyDetail[];
    path?: string;
}
