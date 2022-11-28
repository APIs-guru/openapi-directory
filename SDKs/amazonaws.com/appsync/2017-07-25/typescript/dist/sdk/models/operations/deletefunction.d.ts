import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteFunctionPathParams extends SpeakeasyBase {
    apiId: string;
    functionId: string;
}
export declare class DeleteFunctionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteFunctionRequest extends SpeakeasyBase {
    pathParams: DeleteFunctionPathParams;
    headers: DeleteFunctionHeaders;
}
export declare class DeleteFunctionResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    deleteFunctionResponse?: Map<string, any>;
    internalFailureException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
