import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFunctionPathParams extends SpeakeasyBase {
    apiId: string;
    functionId: string;
}
export declare class GetFunctionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetFunctionRequest extends SpeakeasyBase {
    pathParams: GetFunctionPathParams;
    headers: GetFunctionHeaders;
}
export declare class GetFunctionResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    getFunctionResponse?: shared.GetFunctionResponse;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
