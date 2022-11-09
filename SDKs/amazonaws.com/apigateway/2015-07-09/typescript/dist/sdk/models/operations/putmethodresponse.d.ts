import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutMethodResponsePathParams extends SpeakeasyBase {
    httpMethod: string;
    resourceId: string;
    restapiId: string;
    statusCode: string;
}
export declare class PutMethodResponseHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutMethodResponseRequestBody extends SpeakeasyBase {
    responseModels?: Map<string, string>;
    responseParameters?: Map<string, boolean>;
}
export declare class PutMethodResponseRequest extends SpeakeasyBase {
    pathParams: PutMethodResponsePathParams;
    headers: PutMethodResponseHeaders;
    request: PutMethodResponseRequestBody;
}
export declare class PutMethodResponseResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    limitExceededException?: any;
    methodResponse?: shared.MethodResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
