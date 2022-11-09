import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeImageScanFindingsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeImageScanFindingsXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921DescribeImageScanFindings = "AmazonEC2ContainerRegistry_V20150921.DescribeImageScanFindings"
}
export declare class DescribeImageScanFindingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeImageScanFindingsXAmzTargetEnum;
}
export declare class DescribeImageScanFindingsRequest extends SpeakeasyBase {
    queryParams: DescribeImageScanFindingsQueryParams;
    headers: DescribeImageScanFindingsHeaders;
    request: shared.DescribeImageScanFindingsRequest;
}
export declare class DescribeImageScanFindingsResponse extends SpeakeasyBase {
    contentType: string;
    describeImageScanFindingsResponse?: shared.DescribeImageScanFindingsResponse;
    imageNotFoundException?: any;
    invalidParameterException?: any;
    repositoryNotFoundException?: any;
    scanNotFoundException?: any;
    serverException?: any;
    statusCode: number;
}
