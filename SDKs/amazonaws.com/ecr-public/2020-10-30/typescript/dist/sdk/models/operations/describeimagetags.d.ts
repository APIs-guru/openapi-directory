import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeImageTagsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeImageTagsXAmzTargetEnum {
    SpencerFrontendServiceDescribeImageTags = "SpencerFrontendService.DescribeImageTags"
}
export declare class DescribeImageTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeImageTagsXAmzTargetEnum;
}
export declare class DescribeImageTagsRequest extends SpeakeasyBase {
    queryParams: DescribeImageTagsQueryParams;
    headers: DescribeImageTagsHeaders;
    request: shared.DescribeImageTagsRequest;
}
export declare class DescribeImageTagsResponse extends SpeakeasyBase {
    contentType: string;
    describeImageTagsResponse?: shared.DescribeImageTagsResponse;
    invalidParameterException?: any;
    repositoryNotFoundException?: any;
    serverException?: any;
    statusCode: number;
}
