import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeAlarmPathParams extends SpeakeasyBase {
    alarmModelName: string;
}
export declare class DescribeAlarmQueryParams extends SpeakeasyBase {
    keyValue?: string;
}
export declare class DescribeAlarmHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeAlarmRequest extends SpeakeasyBase {
    pathParams: DescribeAlarmPathParams;
    queryParams: DescribeAlarmQueryParams;
    headers: DescribeAlarmHeaders;
}
export declare class DescribeAlarmResponse extends SpeakeasyBase {
    contentType: string;
    describeAlarmResponse?: shared.DescribeAlarmResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
