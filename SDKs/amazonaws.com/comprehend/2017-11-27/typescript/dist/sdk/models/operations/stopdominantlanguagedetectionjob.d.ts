import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum StopDominantLanguageDetectionJobXAmzTargetEnum {
    Comprehend20171127StopDominantLanguageDetectionJob = "Comprehend_20171127.StopDominantLanguageDetectionJob"
}
export declare class StopDominantLanguageDetectionJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopDominantLanguageDetectionJobXAmzTargetEnum;
}
export declare class StopDominantLanguageDetectionJobRequest extends SpeakeasyBase {
    headers: StopDominantLanguageDetectionJobHeaders;
    request: shared.StopDominantLanguageDetectionJobRequest;
}
export declare class StopDominantLanguageDetectionJobResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    jobNotFoundException?: any;
    statusCode: number;
    stopDominantLanguageDetectionJobResponse?: shared.StopDominantLanguageDetectionJobResponse;
}
