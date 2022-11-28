import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeDomainEndpointOptionsActionEnum {
    DescribeDomainEndpointOptions = "DescribeDomainEndpointOptions"
}
export declare enum PostDescribeDomainEndpointOptionsVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class PostDescribeDomainEndpointOptionsQueryParams extends SpeakeasyBase {
    action: PostDescribeDomainEndpointOptionsActionEnum;
    version: PostDescribeDomainEndpointOptionsVersionEnum;
}
export declare class PostDescribeDomainEndpointOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeDomainEndpointOptionsRequest extends SpeakeasyBase {
    queryParams: PostDescribeDomainEndpointOptionsQueryParams;
    headers: PostDescribeDomainEndpointOptionsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeDomainEndpointOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
