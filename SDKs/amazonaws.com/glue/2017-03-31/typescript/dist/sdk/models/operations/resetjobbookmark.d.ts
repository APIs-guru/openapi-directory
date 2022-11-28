import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ResetJobBookmarkXAmzTargetEnum {
    AwsGlueResetJobBookmark = "AWSGlue.ResetJobBookmark"
}
export declare class ResetJobBookmarkHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ResetJobBookmarkXAmzTargetEnum;
}
export declare class ResetJobBookmarkRequest extends SpeakeasyBase {
    headers: ResetJobBookmarkHeaders;
    request: shared.ResetJobBookmarkRequest;
}
export declare class ResetJobBookmarkResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    resetJobBookmarkResponse?: shared.ResetJobBookmarkResponse;
    statusCode: number;
}
