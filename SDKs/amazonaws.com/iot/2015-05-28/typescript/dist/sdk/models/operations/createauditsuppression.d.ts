import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateAuditSuppressionHeaders extends SpeakeasyBase {
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
export declare class CreateAuditSuppressionRequestBodyResourceIdentifier extends SpeakeasyBase {
    account?: string;
    caCertificateId?: string;
    clientId?: string;
    cognitoIdentityPoolId?: string;
    deviceCertificateId?: string;
    iamRoleArn?: string;
    policyVersionIdentifier?: shared.PolicyVersionIdentifier;
    roleAliasArn?: string;
}
export declare class CreateAuditSuppressionRequestBody extends SpeakeasyBase {
    checkName: string;
    clientRequestToken: string;
    description?: string;
    expirationDate?: Date;
    resourceIdentifier: CreateAuditSuppressionRequestBodyResourceIdentifier;
    suppressIndefinitely?: boolean;
}
export declare class CreateAuditSuppressionRequest extends SpeakeasyBase {
    headers: CreateAuditSuppressionHeaders;
    request: CreateAuditSuppressionRequestBody;
}
export declare class CreateAuditSuppressionResponse extends SpeakeasyBase {
    contentType: string;
    createAuditSuppressionResponse?: Map<string, any>;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    statusCode: number;
    throttlingException?: any;
}
