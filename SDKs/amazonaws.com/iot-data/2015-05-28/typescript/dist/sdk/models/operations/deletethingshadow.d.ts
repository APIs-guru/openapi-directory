import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteThingShadowPathParams extends SpeakeasyBase {
    thingName: string;
}
export declare class DeleteThingShadowQueryParams extends SpeakeasyBase {
    name?: string;
}
export declare class DeleteThingShadowHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteThingShadowRequest extends SpeakeasyBase {
    pathParams: DeleteThingShadowPathParams;
    queryParams: DeleteThingShadowQueryParams;
    headers: DeleteThingShadowHeaders;
}
export declare class DeleteThingShadowResponse extends SpeakeasyBase {
    contentType: string;
    deleteThingShadowResponse?: shared.DeleteThingShadowResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    methodNotAllowedException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
    unsupportedDocumentEncodingException?: any;
}
