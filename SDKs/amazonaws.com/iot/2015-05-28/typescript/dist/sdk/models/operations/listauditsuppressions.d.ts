import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAuditSuppressionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListAuditSuppressionsHeaders extends SpeakeasyBase {
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
export declare class ListAuditSuppressionsRequestBodyResourceIdentifier extends SpeakeasyBase {
    account?: string;
    caCertificateId?: string;
    clientId?: string;
    cognitoIdentityPoolId?: string;
    deviceCertificateId?: string;
    iamRoleArn?: string;
    policyVersionIdentifier?: shared.PolicyVersionIdentifier;
    roleAliasArn?: string;
}
export declare class ListAuditSuppressionsRequestBody extends SpeakeasyBase {
    ascendingOrder?: boolean;
    checkName?: string;
    maxResults?: number;
    nextToken?: string;
    resourceIdentifier?: ListAuditSuppressionsRequestBodyResourceIdentifier;
}
export declare class ListAuditSuppressionsRequest extends SpeakeasyBase {
    queryParams: ListAuditSuppressionsQueryParams;
    headers: ListAuditSuppressionsHeaders;
    request: ListAuditSuppressionsRequestBody;
}
export declare class ListAuditSuppressionsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listAuditSuppressionsResponse?: shared.ListAuditSuppressionsResponse;
    statusCode: number;
    throttlingException?: any;
}
