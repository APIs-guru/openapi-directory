import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteReceiptFilterActionEnum {
    DeleteReceiptFilter = "DeleteReceiptFilter"
}
export declare enum GetDeleteReceiptFilterVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetDeleteReceiptFilterQueryParams extends SpeakeasyBase {
    action: GetDeleteReceiptFilterActionEnum;
    filterName: string;
    version: GetDeleteReceiptFilterVersionEnum;
}
export declare class GetDeleteReceiptFilterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteReceiptFilterRequest extends SpeakeasyBase {
    queryParams: GetDeleteReceiptFilterQueryParams;
    headers: GetDeleteReceiptFilterHeaders;
}
export declare class GetDeleteReceiptFilterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
