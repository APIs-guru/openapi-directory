import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateModelPathParams extends SpeakeasyBase {
    modelName: string;
    restapiId: string;
}
export declare class UpdateModelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateModelRequestBody extends SpeakeasyBase {
    patchOperations?: shared.PatchOperation[];
}
export declare class UpdateModelRequest extends SpeakeasyBase {
    pathParams: UpdateModelPathParams;
    headers: UpdateModelHeaders;
    request: UpdateModelRequestBody;
}
export declare class UpdateModelResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    limitExceededException?: any;
    model?: shared.Model;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
