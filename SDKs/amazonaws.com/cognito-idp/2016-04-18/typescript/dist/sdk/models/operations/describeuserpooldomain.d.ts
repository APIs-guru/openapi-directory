import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeUserPoolDomainXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceDescribeUserPoolDomain = "AWSCognitoIdentityProviderService.DescribeUserPoolDomain"
}
export declare class DescribeUserPoolDomainHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeUserPoolDomainXAmzTargetEnum;
}
export declare class DescribeUserPoolDomainRequest extends SpeakeasyBase {
    headers: DescribeUserPoolDomainHeaders;
    request: shared.DescribeUserPoolDomainRequest;
}
export declare class DescribeUserPoolDomainResponse extends SpeakeasyBase {
    contentType: string;
    describeUserPoolDomainResponse?: shared.DescribeUserPoolDomainResponse;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
