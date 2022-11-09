import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeChannelPathParams extends SpeakeasyBase {
    channelName: string;
}
export declare class DescribeChannelQueryParams extends SpeakeasyBase {
    includeStatistics?: boolean;
}
export declare class DescribeChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeChannelRequest extends SpeakeasyBase {
    pathParams: DescribeChannelPathParams;
    queryParams: DescribeChannelQueryParams;
    headers: DescribeChannelHeaders;
}
export declare class DescribeChannelResponse extends SpeakeasyBase {
    contentType: string;
    describeChannelResponse?: shared.DescribeChannelResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
