import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateBasePathMappingPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class CreateBasePathMappingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateBasePathMappingRequestBody extends SpeakeasyBase {
    basePath?: string;
    restApiId: string;
    stage?: string;
}
export declare class CreateBasePathMappingRequest extends SpeakeasyBase {
    pathParams: CreateBasePathMappingPathParams;
    headers: CreateBasePathMappingHeaders;
    request: CreateBasePathMappingRequestBody;
}
export declare class CreateBasePathMappingResponse extends SpeakeasyBase {
    badRequestException?: any;
    basePathMapping?: shared.BasePathMapping;
    conflictException?: any;
    contentType: string;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
