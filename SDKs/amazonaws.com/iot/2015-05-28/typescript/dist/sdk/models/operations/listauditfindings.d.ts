import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAuditFindingsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListAuditFindingsHeaders extends SpeakeasyBase {
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
export declare class ListAuditFindingsRequestBodyResourceIdentifier extends SpeakeasyBase {
    account?: string;
    caCertificateId?: string;
    clientId?: string;
    cognitoIdentityPoolId?: string;
    deviceCertificateId?: string;
    iamRoleArn?: string;
    policyVersionIdentifier?: shared.PolicyVersionIdentifier;
    roleAliasArn?: string;
}
export declare class ListAuditFindingsRequestBody extends SpeakeasyBase {
    checkName?: string;
    endTime?: Date;
    listSuppressedFindings?: boolean;
    maxResults?: number;
    nextToken?: string;
    resourceIdentifier?: ListAuditFindingsRequestBodyResourceIdentifier;
    startTime?: Date;
    taskId?: string;
}
export declare class ListAuditFindingsRequest extends SpeakeasyBase {
    queryParams: ListAuditFindingsQueryParams;
    headers: ListAuditFindingsHeaders;
    request: ListAuditFindingsRequestBody;
}
export declare class ListAuditFindingsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listAuditFindingsResponse?: shared.ListAuditFindingsResponse;
    statusCode: number;
    throttlingException?: any;
}
