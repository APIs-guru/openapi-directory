import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RegisterThingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class RegisterThingRequestBody extends SpeakeasyBase {
    parameters?: Map<string, string>;
    templateBody: string;
}
export declare class RegisterThingRequest extends SpeakeasyBase {
    headers: RegisterThingHeaders;
    request: RegisterThingRequestBody;
}
export declare class RegisterThingResponse extends SpeakeasyBase {
    conflictingResourceUpdateException?: any;
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    registerThingResponse?: shared.RegisterThingResponse;
    resourceRegistrationFailureException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
