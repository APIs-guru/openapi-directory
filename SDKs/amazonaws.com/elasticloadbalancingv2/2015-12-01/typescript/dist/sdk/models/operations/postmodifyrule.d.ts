import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyRuleActionEnum {
    ModifyRule = "ModifyRule"
}
export declare enum PostModifyRuleVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class PostModifyRuleQueryParams extends SpeakeasyBase {
    action: PostModifyRuleActionEnum;
    version: PostModifyRuleVersionEnum;
}
export declare class PostModifyRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyRuleRequest extends SpeakeasyBase {
    queryParams: PostModifyRuleQueryParams;
    headers: PostModifyRuleHeaders;
    request?: Uint8Array;
}
export declare class PostModifyRuleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
