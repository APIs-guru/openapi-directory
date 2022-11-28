import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CancelJobRunPathParams extends SpeakeasyBase {
    jobRunId: string;
    virtualClusterId: string;
}
export declare class CancelJobRunHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CancelJobRunRequest extends SpeakeasyBase {
    pathParams: CancelJobRunPathParams;
    headers: CancelJobRunHeaders;
}
export declare class CancelJobRunResponse extends SpeakeasyBase {
    cancelJobRunResponse?: shared.CancelJobRunResponse;
    contentType: string;
    internalServerException?: any;
    statusCode: number;
    validationException?: any;
}
