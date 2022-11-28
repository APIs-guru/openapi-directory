import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeAlarmModelPathParams extends SpeakeasyBase {
    alarmModelName: string;
}
export declare class DescribeAlarmModelQueryParams extends SpeakeasyBase {
    version?: string;
}
export declare class DescribeAlarmModelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeAlarmModelRequest extends SpeakeasyBase {
    pathParams: DescribeAlarmModelPathParams;
    queryParams: DescribeAlarmModelQueryParams;
    headers: DescribeAlarmModelHeaders;
}
export declare class DescribeAlarmModelResponse extends SpeakeasyBase {
    contentType: string;
    describeAlarmModelResponse?: shared.DescribeAlarmModelResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
