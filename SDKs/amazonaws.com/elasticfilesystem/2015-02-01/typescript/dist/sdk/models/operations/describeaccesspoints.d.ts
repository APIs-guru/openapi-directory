import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeAccessPointsQueryParams extends SpeakeasyBase {
    accessPointId?: string;
    fileSystemId?: string;
    maxResults?: number;
    nextToken?: string;
}
export declare class DescribeAccessPointsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeAccessPointsRequest extends SpeakeasyBase {
    queryParams: DescribeAccessPointsQueryParams;
    headers: DescribeAccessPointsHeaders;
}
export declare class DescribeAccessPointsResponse extends SpeakeasyBase {
    accessPointNotFound?: any;
    badRequest?: any;
    contentType: string;
    describeAccessPointsResponse?: shared.DescribeAccessPointsResponse;
    fileSystemNotFound?: any;
    internalServerError?: any;
    statusCode: number;
}
