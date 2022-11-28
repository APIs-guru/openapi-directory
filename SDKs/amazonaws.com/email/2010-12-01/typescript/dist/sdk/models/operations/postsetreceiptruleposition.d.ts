import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostSetReceiptRulePositionActionEnum {
    SetReceiptRulePosition = "SetReceiptRulePosition"
}
export declare enum PostSetReceiptRulePositionVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostSetReceiptRulePositionQueryParams extends SpeakeasyBase {
    action: PostSetReceiptRulePositionActionEnum;
    version: PostSetReceiptRulePositionVersionEnum;
}
export declare class PostSetReceiptRulePositionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostSetReceiptRulePositionRequest extends SpeakeasyBase {
    queryParams: PostSetReceiptRulePositionQueryParams;
    headers: PostSetReceiptRulePositionHeaders;
    request?: Uint8Array;
}
export declare class PostSetReceiptRulePositionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
