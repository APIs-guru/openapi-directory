import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetRetainedMessagePathParams extends SpeakeasyBase {
    topic: string;
}
export declare class GetRetainedMessageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRetainedMessageRequest extends SpeakeasyBase {
    pathParams: GetRetainedMessagePathParams;
    headers: GetRetainedMessageHeaders;
}
export declare class GetRetainedMessageResponse extends SpeakeasyBase {
    contentType: string;
    getRetainedMessageResponse?: shared.GetRetainedMessageResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    methodNotAllowedException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
