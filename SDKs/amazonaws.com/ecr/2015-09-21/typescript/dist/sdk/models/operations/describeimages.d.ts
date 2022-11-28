import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeImagesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeImagesXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921DescribeImages = "AmazonEC2ContainerRegistry_V20150921.DescribeImages"
}
export declare class DescribeImagesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeImagesXAmzTargetEnum;
}
export declare class DescribeImagesRequest extends SpeakeasyBase {
    queryParams: DescribeImagesQueryParams;
    headers: DescribeImagesHeaders;
    request: shared.DescribeImagesRequest;
}
export declare class DescribeImagesResponse extends SpeakeasyBase {
    contentType: string;
    describeImagesResponse?: shared.DescribeImagesResponse;
    imageNotFoundException?: any;
    invalidParameterException?: any;
    repositoryNotFoundException?: any;
    serverException?: any;
    statusCode: number;
}
