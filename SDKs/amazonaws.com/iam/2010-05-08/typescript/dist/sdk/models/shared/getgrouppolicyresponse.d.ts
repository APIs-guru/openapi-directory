import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the response to a successful <a>GetGroupPolicy</a> request.
**/
export declare class GetGroupPolicyResponse extends SpeakeasyBase {
    groupName: string;
    policyDocument: string;
    policyName: string;
}
