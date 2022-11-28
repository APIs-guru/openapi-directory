import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteAuthorizerPathParams extends SpeakeasyBase {
    apiId: string;
    authorizerId: string;
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
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
