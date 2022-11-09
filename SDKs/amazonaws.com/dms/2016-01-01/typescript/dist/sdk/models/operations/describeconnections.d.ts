import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeConnectionsQueryParams extends SpeakeasyBase {
    marker?: string;
    maxRecords?: string;
}
export declare enum DescribeConnectionsXAmzTargetEnum {
    AmazonDmSv20160101DescribeConnections = "AmazonDMSv20160101.DescribeConnections"
}
export declare class DescribeConnectionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeConnectionsXAmzTargetEnum;
}
export declare class DescribeConnectionsRequest extends SpeakeasyBase {
    queryParams: DescribeConnectionsQueryParams;
    headers: DescribeConnectionsHeaders;
    request: shared.DescribeConnectionsMessage;
}
export declare class DescribeConnectionsResponse extends SpeakeasyBase {
    contentType: string;
    describeConnectionsResponse?: shared.DescribeConnectionsResponse;
    resourceNotFoundFault?: any;
    statusCode: number;
}
