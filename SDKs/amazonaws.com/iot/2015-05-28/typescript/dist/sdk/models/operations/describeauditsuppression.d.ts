import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeAuditSuppressionHeaders extends SpeakeasyBase {
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
export declare class DescribeAuditSuppressionRequestBodyResourceIdentifier extends SpeakeasyBase {
    account?: string;
    caCertificateId?: string;
    clientId?: string;
    cognitoIdentityPoolId?: string;
    deviceCertificateId?: string;
    iamRoleArn?: string;
    policyVersionIdentifier?: shared.PolicyVersionIdentifier;
    roleAliasArn?: string;
}
export declare class DescribeAuditSuppressionRequestBody extends SpeakeasyBase {
    checkName: string;
    resourceIdentifier: DescribeAuditSuppressionRequestBodyResourceIdentifier;
}
export declare class DescribeAuditSuppressionRequest extends SpeakeasyBase {
    headers: DescribeAuditSuppressionHeaders;
    request: DescribeAuditSuppressionRequestBody;
}
export declare class DescribeAuditSuppressionResponse extends SpeakeasyBase {
    contentType: string;
    describeAuditSuppressionResponse?: shared.DescribeAuditSuppressionResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
