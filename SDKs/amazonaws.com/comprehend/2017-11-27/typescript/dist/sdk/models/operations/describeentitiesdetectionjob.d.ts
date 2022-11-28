import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeEntitiesDetectionJobXAmzTargetEnum {
    Comprehend20171127DescribeEntitiesDetectionJob = "Comprehend_20171127.DescribeEntitiesDetectionJob"
}
export declare class DescribeEntitiesDetectionJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEntitiesDetectionJobXAmzTargetEnum;
}
export declare class DescribeEntitiesDetectionJobRequest extends SpeakeasyBase {
    headers: DescribeEntitiesDetectionJobHeaders;
    request: shared.DescribeEntitiesDetectionJobRequest;
}
export declare class DescribeEntitiesDetectionJobResponse extends SpeakeasyBase {
    contentType: string;
    describeEntitiesDetectionJobResponse?: shared.DescribeEntitiesDetectionJobResponse;
    internalServerException?: any;
    invalidRequestException?: any;
    jobNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
