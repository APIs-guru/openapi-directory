import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateAuthorizerPathParams extends SpeakeasyBase {
    authorizerId: string;
    restapiId: string;
}
export declare class UpdateAuthorizerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateAuthorizerRequestBody extends SpeakeasyBase {
    patchOperations?: shared.PatchOperation[];
}
export declare class UpdateAuthorizerRequest extends SpeakeasyBase {
    pathParams: UpdateAuthorizerPathParams;
    headers: UpdateAuthorizerHeaders;
    request: UpdateAuthorizerRequestBody;
}
export declare class UpdateAuthorizerResponse extends SpeakeasyBase {
    authorizer?: shared.Authorizer;
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
