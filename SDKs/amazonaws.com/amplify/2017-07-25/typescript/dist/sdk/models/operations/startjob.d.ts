import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StartJobPathParams extends SpeakeasyBase {
    appId: string;
    branchName: string;
}
export declare class StartJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum StartJobRequestBodyJobTypeEnum {
    Release = "RELEASE",
    Retry = "RETRY",
    Manual = "MANUAL",
    WebHook = "WEB_HOOK"
}
export declare class StartJobRequestBody extends SpeakeasyBase {
    commitId?: string;
    commitMessage?: string;
    commitTime?: Date;
    jobId?: string;
    jobReason?: string;
    jobType: StartJobRequestBodyJobTypeEnum;
}
export declare class StartJobRequest extends SpeakeasyBase {
    pathParams: StartJobPathParams;
    headers: StartJobHeaders;
    request: StartJobRequestBody;
}
export declare class StartJobResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    startJobResult?: shared.StartJobResult;
    statusCode: number;
    unauthorizedException?: any;
}
