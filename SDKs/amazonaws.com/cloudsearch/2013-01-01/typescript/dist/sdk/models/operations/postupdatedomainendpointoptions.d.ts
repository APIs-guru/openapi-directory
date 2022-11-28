import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostUpdateDomainEndpointOptionsActionEnum {
    UpdateDomainEndpointOptions = "UpdateDomainEndpointOptions"
}
export declare enum PostUpdateDomainEndpointOptionsVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class PostUpdateDomainEndpointOptionsQueryParams extends SpeakeasyBase {
    action: PostUpdateDomainEndpointOptionsActionEnum;
    version: PostUpdateDomainEndpointOptionsVersionEnum;
}
export declare class PostUpdateDomainEndpointOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUpdateDomainEndpointOptionsRequest extends SpeakeasyBase {
    queryParams: PostUpdateDomainEndpointOptionsQueryParams;
    headers: PostUpdateDomainEndpointOptionsHeaders;
    request?: Uint8Array;
}
export declare class PostUpdateDomainEndpointOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
