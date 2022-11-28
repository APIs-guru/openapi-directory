import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAuthorizerPathParams extends SpeakeasyBase {
    authorizerId: string;
    restapiId: string;
}
export declare class GetAuthorizerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAuthorizerRequest extends SpeakeasyBase {
    pathParams: GetAuthorizerPathParams;
    headers: GetAuthorizerHeaders;
}
export declare class GetAuthorizerResponse extends SpeakeasyBase {
    authorizer?: shared.Authorizer;
    badRequestException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
