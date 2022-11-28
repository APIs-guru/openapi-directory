import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAuditSuppressionHeaders extends SpeakeasyBase {
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
export declare class DeleteAuditSuppressionRequestBodyResourceIdentifier extends SpeakeasyBase {
    account?: string;
    caCertificateId?: string;
    clientId?: string;
    cognitoIdentityPoolId?: string;
    deviceCertificateId?: string;
    iamRoleArn?: string;
    policyVersionIdentifier?: shared.PolicyVersionIdentifier;
    roleAliasArn?: string;
}
export declare class DeleteAuditSuppressionRequestBody extends SpeakeasyBase {
    checkName: string;
    resourceIdentifier: DeleteAuditSuppressionRequestBodyResourceIdentifier;
}
export declare class DeleteAuditSuppressionRequest extends SpeakeasyBase {
    headers: DeleteAuditSuppressionHeaders;
    request: DeleteAuditSuppressionRequestBody;
}
export declare class DeleteAuditSuppressionResponse extends SpeakeasyBase {
    contentType: string;
    deleteAuditSuppressionResponse?: Map<string, any>;
    internalFailureException?: any;
    invalidRequestException?: any;
    statusCode: number;
    throttlingException?: any;
}
