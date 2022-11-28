import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetCreateDomainActionEnum {
    CreateDomain = "CreateDomain"
}
export declare enum GetCreateDomainVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class GetCreateDomainQueryParams extends SpeakeasyBase {
    action: GetCreateDomainActionEnum;
    domainName: string;
    version: GetCreateDomainVersionEnum;
}
export declare class GetCreateDomainHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCreateDomainRequest extends SpeakeasyBase {
    queryParams: GetCreateDomainQueryParams;
    headers: GetCreateDomainHeaders;
}
export declare class GetCreateDomainResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
