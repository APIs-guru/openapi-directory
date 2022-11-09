import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DisconnectParticipantHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzBearer: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DisconnectParticipantRequestBody extends SpeakeasyBase {
    clientToken?: string;
}
export declare class DisconnectParticipantRequest extends SpeakeasyBase {
    headers: DisconnectParticipantHeaders;
    request: DisconnectParticipantRequestBody;
}
export declare class DisconnectParticipantResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    disconnectParticipantResponse?: Map<string, any>;
    internalServerException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
