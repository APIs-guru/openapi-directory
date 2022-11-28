import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeEndpointsQueryParams extends SpeakeasyBase {
    marker?: string;
    maxRecords?: string;
}
export declare enum DescribeEndpointsXAmzTargetEnum {
    AmazonDmSv20160101DescribeEndpoints = "AmazonDMSv20160101.DescribeEndpoints"
}
export declare class DescribeEndpointsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEndpointsXAmzTargetEnum;
}
export declare class DescribeEndpointsRequest extends SpeakeasyBase {
    queryParams: DescribeEndpointsQueryParams;
    headers: DescribeEndpointsHeaders;
    request: shared.DescribeEndpointsMessage;
}
export declare class DescribeEndpointsResponse extends SpeakeasyBase {
    contentType: string;
    describeEndpointsResponse?: shared.DescribeEndpointsResponse;
    resourceNotFoundFault?: any;
    statusCode: number;
}
