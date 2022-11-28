import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateApiMappingPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class CreateApiMappingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateApiMappingRequestBody extends SpeakeasyBase {
    apiId: string;
    apiMappingKey?: string;
    stage: string;
}
export declare class CreateApiMappingRequest extends SpeakeasyBase {
    pathParams: CreateApiMappingPathParams;
    headers: CreateApiMappingHeaders;
    request: CreateApiMappingRequestBody;
}
export declare class CreateApiMappingResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    createApiMappingResponse?: shared.CreateApiMappingResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
