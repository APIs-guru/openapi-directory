import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeTagsXAmzTargetEnum {
    AwsPoseidonServiceV20151101DescribeTags = "AWSPoseidonService_V2015_11_01.DescribeTags"
}
export declare class DescribeTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTagsXAmzTargetEnum;
}
export declare class DescribeTagsRequest extends SpeakeasyBase {
    headers: DescribeTagsHeaders;
    request: shared.DescribeTagsRequest;
}
export declare class DescribeTagsResponse extends SpeakeasyBase {
    authorizationErrorException?: any;
    contentType: string;
    describeTagsResponse?: shared.DescribeTagsResponse;
    homeRegionNotSetException?: any;
    invalidParameterException?: any;
    invalidParameterValueException?: any;
    resourceNotFoundException?: any;
    serverInternalErrorException?: any;
    statusCode: number;
}
