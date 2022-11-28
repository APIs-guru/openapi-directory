import { SpeakeasyBase } from "../../../internal/utils";
import { GroupDetail } from "./groupdetail";
import { ManagedPolicyDetail } from "./managedpolicydetail";
import { RoleDetail } from "./roledetail";
import { UserDetail } from "./userdetail";
/**
 * Contains the response to a successful <a>GetAccountAuthorizationDetails</a> request.
**/
export declare class GetAccountAuthorizationDetailsResponse extends SpeakeasyBase {
    groupDetailList?: GroupDetail[];
    isTruncated?: boolean;
    marker?: string;
    policies?: ManagedPolicyDetail[];
    roleDetailList?: RoleDetail[];
    userDetailList?: UserDetail[];
}
