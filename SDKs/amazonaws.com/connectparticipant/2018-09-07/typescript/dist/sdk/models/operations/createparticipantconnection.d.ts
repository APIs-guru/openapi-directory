import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateParticipantConnectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzBearer: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateParticipantConnectionRequestBody extends SpeakeasyBase {
    type: shared.ConnectionTypeEnum[];
}
export declare class CreateParticipantConnectionRequest extends SpeakeasyBase {
    headers: CreateParticipantConnectionHeaders;
    request: CreateParticipantConnectionRequestBody;
}
export declare class CreateParticipantConnectionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createParticipantConnectionResponse?: shared.CreateParticipantConnectionResponse;
    internalServerException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
