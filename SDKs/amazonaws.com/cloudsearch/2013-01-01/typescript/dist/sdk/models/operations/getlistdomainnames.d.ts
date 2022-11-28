import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetListDomainNamesActionEnum {
    ListDomainNames = "ListDomainNames"
}
export declare enum GetListDomainNamesVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class GetListDomainNamesQueryParams extends SpeakeasyBase {
    action: GetListDomainNamesActionEnum;
    version: GetListDomainNamesVersionEnum;
}
export declare class GetListDomainNamesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListDomainNamesRequest extends SpeakeasyBase {
    queryParams: GetListDomainNamesQueryParams;
    headers: GetListDomainNamesHeaders;
}
export declare class GetListDomainNamesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
