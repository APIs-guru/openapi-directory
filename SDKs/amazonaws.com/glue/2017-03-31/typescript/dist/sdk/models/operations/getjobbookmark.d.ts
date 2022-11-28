import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetJobBookmarkXAmzTargetEnum {
    AwsGlueGetJobBookmark = "AWSGlue.GetJobBookmark"
}
export declare class GetJobBookmarkHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetJobBookmarkXAmzTargetEnum;
}
export declare class GetJobBookmarkRequest extends SpeakeasyBase {
    headers: GetJobBookmarkHeaders;
    request: shared.GetJobBookmarkRequest;
}
export declare class GetJobBookmarkResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    getJobBookmarkResponse?: shared.GetJobBookmarkResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
    validationException?: any;
}
