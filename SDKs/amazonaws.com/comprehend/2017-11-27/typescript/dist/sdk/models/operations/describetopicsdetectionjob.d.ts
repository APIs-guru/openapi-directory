import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeTopicsDetectionJobXAmzTargetEnum {
    Comprehend20171127DescribeTopicsDetectionJob = "Comprehend_20171127.DescribeTopicsDetectionJob"
}
export declare class DescribeTopicsDetectionJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTopicsDetectionJobXAmzTargetEnum;
}
export declare class DescribeTopicsDetectionJobRequest extends SpeakeasyBase {
    headers: DescribeTopicsDetectionJobHeaders;
    request: shared.DescribeTopicsDetectionJobRequest;
}
export declare class DescribeTopicsDetectionJobResponse extends SpeakeasyBase {
    contentType: string;
    describeTopicsDetectionJobResponse?: shared.DescribeTopicsDetectionJobResponse;
    internalServerException?: any;
    invalidRequestException?: any;
    jobNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
