import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeSentimentDetectionJobXAmzTargetEnum {
    Comprehend20171127DescribeSentimentDetectionJob = "Comprehend_20171127.DescribeSentimentDetectionJob"
}
export declare class DescribeSentimentDetectionJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeSentimentDetectionJobXAmzTargetEnum;
}
export declare class DescribeSentimentDetectionJobRequest extends SpeakeasyBase {
    headers: DescribeSentimentDetectionJobHeaders;
    request: shared.DescribeSentimentDetectionJobRequest;
}
export declare class DescribeSentimentDetectionJobResponse extends SpeakeasyBase {
    contentType: string;
    describeSentimentDetectionJobResponse?: shared.DescribeSentimentDetectionJobResponse;
    internalServerException?: any;
    invalidRequestException?: any;
    jobNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
