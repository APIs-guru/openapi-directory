import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateReceiptFilterActionEnum {
    CreateReceiptFilter = "CreateReceiptFilter"
}
export declare enum PostCreateReceiptFilterVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostCreateReceiptFilterQueryParams extends SpeakeasyBase {
    action: PostCreateReceiptFilterActionEnum;
    version: PostCreateReceiptFilterVersionEnum;
}
export declare class PostCreateReceiptFilterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateReceiptFilterRequest extends SpeakeasyBase {
    queryParams: PostCreateReceiptFilterQueryParams;
    headers: PostCreateReceiptFilterHeaders;
    request?: Uint8Array;
}
export declare class PostCreateReceiptFilterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
