import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeEventsQueryParams extends SpeakeasyBase {
    marker?: string;
    maxRecords?: string;
}
export declare enum DescribeEventsXAmzTargetEnum {
    AmazonDmSv20160101DescribeEvents = "AmazonDMSv20160101.DescribeEvents"
}
export declare class DescribeEventsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEventsXAmzTargetEnum;
}
export declare class DescribeEventsRequest extends SpeakeasyBase {
    queryParams: DescribeEventsQueryParams;
    headers: DescribeEventsHeaders;
    request: shared.DescribeEventsMessage;
}
export declare class DescribeEventsResponse extends SpeakeasyBase {
    contentType: string;
    describeEventsResponse?: shared.DescribeEventsResponse;
    statusCode: number;
}
