import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteReceiptFilterActionEnum {
    DeleteReceiptFilter = "DeleteReceiptFilter"
}
export declare enum PostDeleteReceiptFilterVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostDeleteReceiptFilterQueryParams extends SpeakeasyBase {
    action: PostDeleteReceiptFilterActionEnum;
    version: PostDeleteReceiptFilterVersionEnum;
}
export declare class PostDeleteReceiptFilterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteReceiptFilterRequest extends SpeakeasyBase {
    queryParams: PostDeleteReceiptFilterQueryParams;
    headers: PostDeleteReceiptFilterHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteReceiptFilterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
