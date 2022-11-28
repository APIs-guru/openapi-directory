import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeDomainEndpointOptionsActionEnum {
    DescribeDomainEndpointOptions = "DescribeDomainEndpointOptions"
}
export declare enum GetDescribeDomainEndpointOptionsVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class GetDescribeDomainEndpointOptionsQueryParams extends SpeakeasyBase {
    action: GetDescribeDomainEndpointOptionsActionEnum;
    deployed?: boolean;
    domainName: string;
    version: GetDescribeDomainEndpointOptionsVersionEnum;
}
export declare class GetDescribeDomainEndpointOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeDomainEndpointOptionsRequest extends SpeakeasyBase {
    queryParams: GetDescribeDomainEndpointOptionsQueryParams;
    headers: GetDescribeDomainEndpointOptionsHeaders;
}
export declare class GetDescribeDomainEndpointOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
