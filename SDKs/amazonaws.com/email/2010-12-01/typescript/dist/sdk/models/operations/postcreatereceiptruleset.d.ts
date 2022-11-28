import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateReceiptRuleSetActionEnum {
    CreateReceiptRuleSet = "CreateReceiptRuleSet"
}
export declare enum PostCreateReceiptRuleSetVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostCreateReceiptRuleSetQueryParams extends SpeakeasyBase {
    action: PostCreateReceiptRuleSetActionEnum;
    version: PostCreateReceiptRuleSetVersionEnum;
}
export declare class PostCreateReceiptRuleSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateReceiptRuleSetRequest extends SpeakeasyBase {
    queryParams: PostCreateReceiptRuleSetQueryParams;
    headers: PostCreateReceiptRuleSetHeaders;
    request?: Uint8Array;
}
export declare class PostCreateReceiptRuleSetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
