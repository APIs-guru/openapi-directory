import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateAuditSuppressionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Information that identifies the noncompliant resource.
**/
export declare class UpdateAuditSuppressionRequestBodyResourceIdentifier extends SpeakeasyBase {
    account?: string;
    caCertificateId?: string;
    clientId?: string;
    cognitoIdentityPoolId?: string;
    deviceCertificateId?: string;
    iamRoleArn?: string;
    policyVersionIdentifier?: shared.PolicyVersionIdentifier;
    roleAliasArn?: string;
}
export declare class UpdateAuditSuppressionRequestBody extends SpeakeasyBase {
    checkName: string;
    description?: string;
    expirationDate?: Date;
    resourceIdentifier: UpdateAuditSuppressionRequestBodyResourceIdentifier;
    suppressIndefinitely?: boolean;
}
export declare class UpdateAuditSuppressionRequest extends SpeakeasyBase {
    headers: UpdateAuditSuppressionHeaders;
    request: UpdateAuditSuppressionRequestBody;
}
export declare class UpdateAuditSuppressionResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateAuditSuppressionResponse?: Map<string, any>;
}
