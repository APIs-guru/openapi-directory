import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeClusterPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DescribeClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeClusterRequest extends SpeakeasyBase {
    pathParams: DescribeClusterPathParams;
    headers: DescribeClusterHeaders;
}
export declare class DescribeClusterResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    describeClusterResponse?: shared.DescribeClusterResponse;
    resourceNotFoundException?: any;
    serverException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
