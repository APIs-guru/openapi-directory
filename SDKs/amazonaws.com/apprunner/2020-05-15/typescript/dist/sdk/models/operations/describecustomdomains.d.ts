import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeCustomDomainsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeCustomDomainsXAmzTargetEnum {
    AppRunnerDescribeCustomDomains = "AppRunner.DescribeCustomDomains"
}
export declare class DescribeCustomDomainsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeCustomDomainsXAmzTargetEnum;
}
export declare class DescribeCustomDomainsRequest extends SpeakeasyBase {
    queryParams: DescribeCustomDomainsQueryParams;
    headers: DescribeCustomDomainsHeaders;
    request: shared.DescribeCustomDomainsRequest;
}
export declare class DescribeCustomDomainsResponse extends SpeakeasyBase {
    contentType: string;
    describeCustomDomainsResponse?: shared.DescribeCustomDomainsResponse;
    internalServiceErrorException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
