import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTypePathParams extends SpeakeasyBase {
    apiId: string;
    typeName: string;
}
export declare enum GetTypeFormatEnum {
    Sdl = "SDL",
    Json = "JSON"
}
export declare class GetTypeQueryParams extends SpeakeasyBase {
    format: GetTypeFormatEnum;
}
export declare class GetTypeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetTypeRequest extends SpeakeasyBase {
    pathParams: GetTypePathParams;
    queryParams: GetTypeQueryParams;
    headers: GetTypeHeaders;
}
export declare class GetTypeResponse extends SpeakeasyBase {
    badRequestException?: any;
    concurrentModificationException?: any;
    contentType: string;
    getTypeResponse?: shared.GetTypeResponse;
    internalFailureException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
