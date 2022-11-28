import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object that represents the details about the remediation exception. The details include the rule name, an explanation of an exception, the time when the exception will be deleted, the resource ID, and resource type.
**/
export declare class RemediationException extends SpeakeasyBase {
    configRuleName: string;
    expirationTime?: Date;
    message?: string;
    resourceId: string;
    resourceType: string;
}
