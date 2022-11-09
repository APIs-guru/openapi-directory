import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteDomainActionEnum {
    DeleteDomain = "DeleteDomain"
}
export declare enum GetDeleteDomainVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class GetDeleteDomainQueryParams extends SpeakeasyBase {
    action: GetDeleteDomainActionEnum;
    domainName: string;
    version: GetDeleteDomainVersionEnum;
}
export declare class GetDeleteDomainHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteDomainRequest extends SpeakeasyBase {
    queryParams: GetDeleteDomainQueryParams;
    headers: GetDeleteDomainHeaders;
}
export declare class GetDeleteDomainResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
