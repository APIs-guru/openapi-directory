import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteAuthorizerPathParams extends SpeakeasyBase {
    authorizerId: string;
    restapiId: string;
}
export declare class DeleteAuthorizerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteAuthorizerRequest extends SpeakeasyBase {
    pathParams: DeleteAuthorizerPathParams;
    headers: DeleteAuthorizerHeaders;
}
export declare class DeleteAuthorizerResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
