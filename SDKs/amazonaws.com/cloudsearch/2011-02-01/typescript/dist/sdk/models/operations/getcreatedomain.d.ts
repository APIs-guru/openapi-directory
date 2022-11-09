import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetCreateDomainActionEnum {
    CreateDomain = "CreateDomain"
}
export declare enum GetCreateDomainVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
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
