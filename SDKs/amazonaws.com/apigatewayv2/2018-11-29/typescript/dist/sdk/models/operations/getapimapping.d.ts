import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiMappingPathParams extends SpeakeasyBase {
    apiMappingId: string;
    domainName: string;
}
export declare class GetApiMappingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetApiMappingRequest extends SpeakeasyBase {
    pathParams: GetApiMappingPathParams;
    headers: GetApiMappingHeaders;
}
export declare class GetApiMappingResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getApiMappingResponse?: shared.GetApiMappingResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
