import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeDominantLanguageDetectionJobXAmzTargetEnum {
    Comprehend20171127DescribeDominantLanguageDetectionJob = "Comprehend_20171127.DescribeDominantLanguageDetectionJob"
}
export declare class DescribeDominantLanguageDetectionJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDominantLanguageDetectionJobXAmzTargetEnum;
}
export declare class DescribeDominantLanguageDetectionJobRequest extends SpeakeasyBase {
    headers: DescribeDominantLanguageDetectionJobHeaders;
    request: shared.DescribeDominantLanguageDetectionJobRequest;
}
export declare class DescribeDominantLanguageDetectionJobResponse extends SpeakeasyBase {
    contentType: string;
    describeDominantLanguageDetectionJobResponse?: shared.DescribeDominantLanguageDetectionJobResponse;
    internalServerException?: any;
    invalidRequestException?: any;
    jobNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
