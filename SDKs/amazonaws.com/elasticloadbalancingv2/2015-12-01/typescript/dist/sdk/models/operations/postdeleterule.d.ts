import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteRuleActionEnum {
    DeleteRule = "DeleteRule"
}
export declare enum PostDeleteRuleVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class PostDeleteRuleQueryParams extends SpeakeasyBase {
    action: PostDeleteRuleActionEnum;
    version: PostDeleteRuleVersionEnum;
}
export declare class PostDeleteRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteRuleRequest extends SpeakeasyBase {
    queryParams: PostDeleteRuleQueryParams;
    headers: PostDeleteRuleHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteRuleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
