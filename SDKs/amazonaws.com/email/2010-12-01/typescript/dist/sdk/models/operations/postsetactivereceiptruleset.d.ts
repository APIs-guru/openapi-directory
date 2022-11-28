import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostSetActiveReceiptRuleSetActionEnum {
    SetActiveReceiptRuleSet = "SetActiveReceiptRuleSet"
}
export declare enum PostSetActiveReceiptRuleSetVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostSetActiveReceiptRuleSetQueryParams extends SpeakeasyBase {
    action: PostSetActiveReceiptRuleSetActionEnum;
    version: PostSetActiveReceiptRuleSetVersionEnum;
}
export declare class PostSetActiveReceiptRuleSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostSetActiveReceiptRuleSetRequest extends SpeakeasyBase {
    queryParams: PostSetActiveReceiptRuleSetQueryParams;
    headers: PostSetActiveReceiptRuleSetHeaders;
    request?: Uint8Array;
}
export declare class PostSetActiveReceiptRuleSetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
