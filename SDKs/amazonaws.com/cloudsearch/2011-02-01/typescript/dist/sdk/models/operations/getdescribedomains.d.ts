import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeDomainsActionEnum {
    DescribeDomains = "DescribeDomains"
}
export declare enum GetDescribeDomainsVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class GetDescribeDomainsQueryParams extends SpeakeasyBase {
    action: GetDescribeDomainsActionEnum;
    domainNames?: string[];
    version: GetDescribeDomainsVersionEnum;
}
export declare class GetDescribeDomainsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeDomainsRequest extends SpeakeasyBase {
    queryParams: GetDescribeDomainsQueryParams;
    headers: GetDescribeDomainsHeaders;
}
export declare class GetDescribeDomainsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
