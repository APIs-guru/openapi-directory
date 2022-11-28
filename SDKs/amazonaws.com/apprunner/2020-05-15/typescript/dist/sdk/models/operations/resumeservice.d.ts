import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ResumeServiceXAmzTargetEnum {
    AppRunnerResumeService = "AppRunner.ResumeService"
}
export declare class ResumeServiceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ResumeServiceXAmzTargetEnum;
}
export declare class ResumeServiceRequest extends SpeakeasyBase {
    headers: ResumeServiceHeaders;
    request: shared.ResumeServiceRequest;
}
export declare class ResumeServiceResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceErrorException?: any;
    invalidRequestException?: any;
    invalidStateException?: any;
    resourceNotFoundException?: any;
    resumeServiceResponse?: shared.ResumeServiceResponse;
    statusCode: number;
}
