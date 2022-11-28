import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SendEventHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzBearer: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class SendEventRequestBody extends SpeakeasyBase {
    clientToken?: string;
    content?: string;
    contentType: string;
}
export declare class SendEventRequest extends SpeakeasyBase {
    headers: SendEventHeaders;
    request: SendEventRequestBody;
}
export declare class SendEventResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    sendEventResponse?: shared.SendEventResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
