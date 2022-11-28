import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Contains information about an IAM policy, including the policy document.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
**/
export declare class PolicyDetail extends SpeakeasyBase {
    policyDocument?: string;
    policyName?: string;
}
