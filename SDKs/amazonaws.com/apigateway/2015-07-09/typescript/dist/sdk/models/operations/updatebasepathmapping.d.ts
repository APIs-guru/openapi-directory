import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateBasePathMappingPathParams extends SpeakeasyBase {
    basePath: string;
    domainName: string;
}
export declare class UpdateBasePathMappingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateBasePathMappingRequestBody extends SpeakeasyBase {
    patchOperations?: shared.PatchOperation[];
}
export declare class UpdateBasePathMappingRequest extends SpeakeasyBase {
    pathParams: UpdateBasePathMappingPathParams;
    headers: UpdateBasePathMappingHeaders;
    request: UpdateBasePathMappingRequestBody;
}
export declare class UpdateBasePathMappingResponse extends SpeakeasyBase {
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
