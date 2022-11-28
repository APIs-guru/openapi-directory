import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  The AWS Identity and Access Management (IAM) action definition details.
**/
export declare class IamActionDefinition extends SpeakeasyBase {
    groups?: string[];
    policyArn: string;
    roles?: string[];
    users?: string[];
}
