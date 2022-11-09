import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeEventsDetectionJobXAmzTargetEnum {
    Comprehend20171127DescribeEventsDetectionJob = "Comprehend_20171127.DescribeEventsDetectionJob"
}
export declare class DescribeEventsDetectionJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEventsDetectionJobXAmzTargetEnum;
}
export declare class DescribeEventsDetectionJobRequest extends SpeakeasyBase {
    headers: DescribeEventsDetectionJobHeaders;
    request: shared.DescribeEventsDetectionJobRequest;
}
export declare class DescribeEventsDetectionJobResponse extends SpeakeasyBase {
    contentType: string;
    describeEventsDetectionJobResponse?: shared.DescribeEventsDetectionJobResponse;
    internalServerException?: any;
    invalidRequestException?: any;
    jobNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
