import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCloneReceiptRuleSetActionEnum {
    CloneReceiptRuleSet = "CloneReceiptRuleSet"
}
export declare enum PostCloneReceiptRuleSetVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostCloneReceiptRuleSetQueryParams extends SpeakeasyBase {
    action: PostCloneReceiptRuleSetActionEnum;
    version: PostCloneReceiptRuleSetVersionEnum;
}
export declare class PostCloneReceiptRuleSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCloneReceiptRuleSetRequest extends SpeakeasyBase {
    queryParams: PostCloneReceiptRuleSetQueryParams;
    headers: PostCloneReceiptRuleSetHeaders;
    request?: Uint8Array;
}
export declare class PostCloneReceiptRuleSetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
