import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeRepositoriesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeRepositoriesXAmzTargetEnum {
    SpencerFrontendServiceDescribeRepositories = "SpencerFrontendService.DescribeRepositories"
}
export declare class DescribeRepositoriesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeRepositoriesXAmzTargetEnum;
}
export declare class DescribeRepositoriesRequest extends SpeakeasyBase {
    queryParams: DescribeRepositoriesQueryParams;
    headers: DescribeRepositoriesHeaders;
    request: shared.DescribeRepositoriesRequest;
}
export declare class DescribeRepositoriesResponse extends SpeakeasyBase {
    contentType: string;
    describeRepositoriesResponse?: shared.DescribeRepositoriesResponse;
    invalidParameterException?: any;
    repositoryNotFoundException?: any;
    serverException?: any;
    statusCode: number;
}
