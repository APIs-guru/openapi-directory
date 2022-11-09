import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateTypePathParams extends SpeakeasyBase {
    apiId: string;
}
export declare class CreateTypeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum CreateTypeRequestBodyFormatEnum {
    Sdl = "SDL",
    Json = "JSON"
}
export declare class CreateTypeRequestBody extends SpeakeasyBase {
    definition: string;
    format: CreateTypeRequestBodyFormatEnum;
}
export declare class CreateTypeRequest extends SpeakeasyBase {
    pathParams: CreateTypePathParams;
    headers: CreateTypeHeaders;
    request: CreateTypeRequestBody;
}
export declare class CreateTypeResponse extends SpeakeasyBase {
    badRequestException?: any;
    concurrentModificationException?: any;
    contentType: string;
    createTypeResponse?: shared.CreateTypeResponse;
    internalFailureException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
