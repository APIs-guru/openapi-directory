import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class AcceptInvitationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AcceptInvitationRequestBody extends SpeakeasyBase {
    graphArn: string;
}
export declare class AcceptInvitationRequest extends SpeakeasyBase {
    headers: AcceptInvitationHeaders;
    request: AcceptInvitationRequestBody;
}
export declare class AcceptInvitationResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
