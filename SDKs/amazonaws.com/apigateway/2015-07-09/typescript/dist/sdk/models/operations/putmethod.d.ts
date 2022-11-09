import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutMethodPathParams extends SpeakeasyBase {
    httpMethod: string;
    resourceId: string;
    restapiId: string;
}
export declare class PutMethodHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutMethodRequestBody extends SpeakeasyBase {
    apiKeyRequired?: boolean;
    authorizationScopes?: string[];
    authorizationType: string;
    authorizerId?: string;
    operationName?: string;
    requestModels?: Map<string, string>;
    requestParameters?: Map<string, boolean>;
    requestValidatorId?: string;
}
export declare class PutMethodRequest extends SpeakeasyBase {
    pathParams: PutMethodPathParams;
    headers: PutMethodHeaders;
    request: PutMethodRequestBody;
}
export declare class PutMethodResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    limitExceededException?: any;
    method?: shared.Method;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
