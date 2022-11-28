import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The output of the CreatePolicyVersion operation.
**/
export declare class CreatePolicyVersionResponse extends SpeakeasyBase {
    isDefaultVersion?: boolean;
    policyArn?: string;
    policyDocument?: string;
    policyVersionId?: string;
}
