import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateRequestValidatorPathParams extends SpeakeasyBase {
    requestvalidatorId: string;
    restapiId: string;
}
export declare class UpdateRequestValidatorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateRequestValidatorRequestBody extends SpeakeasyBase {
    patchOperations?: shared.PatchOperation[];
}
export declare class UpdateRequestValidatorRequest extends SpeakeasyBase {
    pathParams: UpdateRequestValidatorPathParams;
    headers: UpdateRequestValidatorHeaders;
    request: UpdateRequestValidatorRequestBody;
}
export declare class UpdateRequestValidatorResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    limitExceededException?: any;
    notFoundException?: any;
    requestValidator?: shared.RequestValidator;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
