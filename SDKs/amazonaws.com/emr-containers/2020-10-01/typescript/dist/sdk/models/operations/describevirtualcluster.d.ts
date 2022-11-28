import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeVirtualClusterPathParams extends SpeakeasyBase {
    virtualClusterId: string;
}
export declare class DescribeVirtualClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeVirtualClusterRequest extends SpeakeasyBase {
    pathParams: DescribeVirtualClusterPathParams;
    headers: DescribeVirtualClusterHeaders;
}
export declare class DescribeVirtualClusterResponse extends SpeakeasyBase {
    contentType: string;
    describeVirtualClusterResponse?: shared.DescribeVirtualClusterResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
