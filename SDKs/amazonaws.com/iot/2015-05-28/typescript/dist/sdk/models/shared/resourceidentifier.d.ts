import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyVersionIdentifier } from "./policyversionidentifier";
/**
 * Information that identifies the noncompliant resource.
**/
export declare class ResourceIdentifier extends SpeakeasyBase {
    account?: string;
    caCertificateId?: string;
    clientId?: string;
    cognitoIdentityPoolId?: string;
    deviceCertificateId?: string;
    iamRoleArn?: string;
    policyVersionIdentifier?: PolicyVersionIdentifier;
    roleAliasArn?: string;
}
