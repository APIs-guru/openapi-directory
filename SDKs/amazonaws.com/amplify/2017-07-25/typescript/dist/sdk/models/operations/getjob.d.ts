import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetJobPathParams extends SpeakeasyBase {
    appId: string;
    branchName: string;
    jobId: string;
}
export declare class GetJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetJobRequest extends SpeakeasyBase {
    pathParams: GetJobPathParams;
    headers: GetJobHeaders;
}
export declare class GetJobResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getJobResult?: shared.GetJobResult;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
