import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SendMessageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzBearer: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class SendMessageRequestBody extends SpeakeasyBase {
    clientToken?: string;
    content: string;
    contentType: string;
}
export declare class SendMessageRequest extends SpeakeasyBase {
    headers: SendMessageHeaders;
    request: SendMessageRequestBody;
}
export declare class SendMessageResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    sendMessageResponse?: shared.SendMessageResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
