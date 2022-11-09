import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeEventsXAmzTargetEnum {
    AmazonDaxv3DescribeEvents = "AmazonDAXV3.DescribeEvents"
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
    headers: DescribeEventsHeaders;
    request: shared.DescribeEventsRequest;
}
export declare class DescribeEventsResponse extends SpeakeasyBase {
    contentType: string;
    describeEventsResponse?: shared.DescribeEventsResponse;
    invalidParameterCombinationException?: any;
    invalidParameterValueException?: any;
    serviceLinkedRoleNotFoundFault?: any;
    statusCode: number;
}
