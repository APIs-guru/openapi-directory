import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The output from the GetPolicy operation.
**/
export declare class GetPolicyResponse extends SpeakeasyBase {
    creationDate?: Date;
    defaultVersionId?: string;
    generationId?: string;
    lastModifiedDate?: Date;
    policyArn?: string;
    policyDocument?: string;
    policyName?: string;
}
