import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeKeyPhrasesDetectionJobXAmzTargetEnum {
    Comprehend20171127DescribeKeyPhrasesDetectionJob = "Comprehend_20171127.DescribeKeyPhrasesDetectionJob"
}
export declare class DescribeKeyPhrasesDetectionJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeKeyPhrasesDetectionJobXAmzTargetEnum;
}
export declare class DescribeKeyPhrasesDetectionJobRequest extends SpeakeasyBase {
    headers: DescribeKeyPhrasesDetectionJobHeaders;
    request: shared.DescribeKeyPhrasesDetectionJobRequest;
}
export declare class DescribeKeyPhrasesDetectionJobResponse extends SpeakeasyBase {
    contentType: string;
    describeKeyPhrasesDetectionJobResponse?: shared.DescribeKeyPhrasesDetectionJobResponse;
    internalServerException?: any;
    invalidRequestException?: any;
    jobNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
