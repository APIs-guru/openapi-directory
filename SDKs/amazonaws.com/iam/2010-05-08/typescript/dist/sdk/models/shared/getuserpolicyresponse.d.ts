import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the response to a successful <a>GetUserPolicy</a> request.
**/
export declare class GetUserPolicyResponse extends SpeakeasyBase {
    policyDocument: string;
    policyName: string;
    userName: string;
}
