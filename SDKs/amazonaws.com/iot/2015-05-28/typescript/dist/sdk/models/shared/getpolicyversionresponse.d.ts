import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The output from the GetPolicyVersion operation.
**/
export declare class GetPolicyVersionResponse extends SpeakeasyBase {
    creationDate?: Date;
    generationId?: string;
    isDefaultVersion?: boolean;
    lastModifiedDate?: Date;
    policyArn?: string;
    policyDocument?: string;
    policyName?: string;
    policyVersionId?: string;
}
