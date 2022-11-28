import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetJobDocumentPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class GetJobDocumentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetJobDocumentRequest extends SpeakeasyBase {
    pathParams: GetJobDocumentPathParams;
    headers: GetJobDocumentHeaders;
}
export declare class GetJobDocumentResponse extends SpeakeasyBase {
    contentType: string;
    getJobDocumentResponse?: shared.GetJobDocumentResponse;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
