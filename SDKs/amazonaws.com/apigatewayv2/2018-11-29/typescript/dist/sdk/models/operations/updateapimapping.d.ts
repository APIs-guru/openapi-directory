import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateApiMappingPathParams extends SpeakeasyBase {
    apiMappingId: string;
    domainName: string;
}
export declare class UpdateApiMappingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateApiMappingRequestBody extends SpeakeasyBase {
    apiId: string;
    apiMappingKey?: string;
    stage?: string;
}
export declare class UpdateApiMappingRequest extends SpeakeasyBase {
    pathParams: UpdateApiMappingPathParams;
    headers: UpdateApiMappingHeaders;
    request: UpdateApiMappingRequestBody;
}
export declare class UpdateApiMappingResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateApiMappingResponse?: shared.UpdateApiMappingResponse;
}
