import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteApiMappingPathParams extends SpeakeasyBase {
    apiMappingId: string;
    domainName: string;
}
export declare class DeleteApiMappingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteApiMappingRequest extends SpeakeasyBase {
    pathParams: DeleteApiMappingPathParams;
    headers: DeleteApiMappingHeaders;
}
export declare class DeleteApiMappingResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
