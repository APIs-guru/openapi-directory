import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeDefaultSearchFieldActionEnum {
    DescribeDefaultSearchField = "DescribeDefaultSearchField"
}
export declare enum GetDescribeDefaultSearchFieldVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class GetDescribeDefaultSearchFieldQueryParams extends SpeakeasyBase {
    action: GetDescribeDefaultSearchFieldActionEnum;
    domainName: string;
    version: GetDescribeDefaultSearchFieldVersionEnum;
}
export declare class GetDescribeDefaultSearchFieldHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeDefaultSearchFieldRequest extends SpeakeasyBase {
    queryParams: GetDescribeDefaultSearchFieldQueryParams;
    headers: GetDescribeDefaultSearchFieldHeaders;
}
export declare class GetDescribeDefaultSearchFieldResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
