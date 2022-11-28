import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateTypePathParams extends SpeakeasyBase {
    apiId: string;
    typeName: string;
}
export declare class UpdateTypeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateTypeRequestBodyFormatEnum {
    Sdl = "SDL",
    Json = "JSON"
}
export declare class UpdateTypeRequestBody extends SpeakeasyBase {
    definition?: string;
    format: UpdateTypeRequestBodyFormatEnum;
}
export declare class UpdateTypeRequest extends SpeakeasyBase {
    pathParams: UpdateTypePathParams;
    headers: UpdateTypeHeaders;
    request: UpdateTypeRequestBody;
}
export declare class UpdateTypeResponse extends SpeakeasyBase {
    badRequestException?: any;
    concurrentModificationException?: any;
    contentType: string;
    internalFailureException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
    updateTypeResponse?: shared.UpdateTypeResponse;
}
