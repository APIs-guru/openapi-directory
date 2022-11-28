import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CancelImageCreationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CancelImageCreationRequestBody extends SpeakeasyBase {
    clientToken: string;
    imageBuildVersionArn: string;
}
export declare class CancelImageCreationRequest extends SpeakeasyBase {
    headers: CancelImageCreationHeaders;
    request: CancelImageCreationRequestBody;
}
export declare class CancelImageCreationResponse extends SpeakeasyBase {
    callRateLimitExceededException?: any;
    cancelImageCreationResponse?: shared.CancelImageCreationResponse;
    clientException?: any;
    contentType: string;
    forbiddenException?: any;
    idempotentParameterMismatchException?: any;
    invalidRequestException?: any;
    resourceInUseException?: any;
    serviceException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
