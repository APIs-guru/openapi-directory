import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetListReceiptFiltersActionEnum {
    ListReceiptFilters = "ListReceiptFilters"
}
export declare enum GetListReceiptFiltersVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetListReceiptFiltersQueryParams extends SpeakeasyBase {
    action: GetListReceiptFiltersActionEnum;
    version: GetListReceiptFiltersVersionEnum;
}
export declare class GetListReceiptFiltersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListReceiptFiltersRequest extends SpeakeasyBase {
    queryParams: GetListReceiptFiltersQueryParams;
    headers: GetListReceiptFiltersHeaders;
}
export declare class GetListReceiptFiltersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
