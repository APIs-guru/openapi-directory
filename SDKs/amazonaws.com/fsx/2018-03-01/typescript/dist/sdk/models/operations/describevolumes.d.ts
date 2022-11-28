import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeVolumesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeVolumesXAmzTargetEnum {
    AwsSimbaApiServiceV20180301DescribeVolumes = "AWSSimbaAPIService_v20180301.DescribeVolumes"
}
export declare class DescribeVolumesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeVolumesXAmzTargetEnum;
}
export declare class DescribeVolumesRequest extends SpeakeasyBase {
    queryParams: DescribeVolumesQueryParams;
    headers: DescribeVolumesHeaders;
    request: shared.DescribeVolumesRequest;
}
export declare class DescribeVolumesResponse extends SpeakeasyBase {
    badRequest?: any;
    contentType: string;
    describeVolumesResponse?: shared.DescribeVolumesResponse;
    internalServerError?: any;
    statusCode: number;
    volumeNotFound?: any;
}
