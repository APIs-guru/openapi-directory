import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteJobPathParams extends SpeakeasyBase {
    appId: string;
    branchName: string;
    jobId: string;
}
export declare class DeleteJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteJobRequest extends SpeakeasyBase {
    pathParams: DeleteJobPathParams;
    headers: DeleteJobHeaders;
}
export declare class DeleteJobResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteJobResult?: shared.DeleteJobResult;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
