import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeTrailsXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101DescribeTrails = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeTrails"
}
export declare class DescribeTrailsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTrailsXAmzTargetEnum;
}
export declare class DescribeTrailsRequest extends SpeakeasyBase {
    headers: DescribeTrailsHeaders;
    request: shared.DescribeTrailsRequest;
}
export declare class DescribeTrailsResponse extends SpeakeasyBase {
    contentType: string;
    describeTrailsResponse?: shared.DescribeTrailsResponse;
    invalidTrailNameException?: any;
    operationNotPermittedException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
