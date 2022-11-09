import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StopJobPathParams extends SpeakeasyBase {
    appId: string;
    branchName: string;
    jobId: string;
}
export declare class StopJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StopJobRequest extends SpeakeasyBase {
    pathParams: StopJobPathParams;
    headers: StopJobHeaders;
}
export declare class StopJobResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    stopJobResult?: shared.StopJobResult;
    unauthorizedException?: any;
}
