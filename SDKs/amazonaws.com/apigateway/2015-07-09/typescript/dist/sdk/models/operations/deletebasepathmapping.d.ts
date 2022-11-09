import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteBasePathMappingPathParams extends SpeakeasyBase {
    basePath: string;
    domainName: string;
}
export declare class DeleteBasePathMappingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteBasePathMappingRequest extends SpeakeasyBase {
    pathParams: DeleteBasePathMappingPathParams;
    headers: DeleteBasePathMappingHeaders;
}
export declare class DeleteBasePathMappingResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
