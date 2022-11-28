import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the response to a successful <a>GetRolePolicy</a> request.
**/
export declare class GetRolePolicyResponse extends SpeakeasyBase {
    policyDocument: string;
    policyName: string;
    roleName: string;
}
