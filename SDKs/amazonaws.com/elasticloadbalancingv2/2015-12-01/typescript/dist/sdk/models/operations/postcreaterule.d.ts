import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateRuleActionEnum {
    CreateRule = "CreateRule"
}
export declare enum PostCreateRuleVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class PostCreateRuleQueryParams extends SpeakeasyBase {
    action: PostCreateRuleActionEnum;
    version: PostCreateRuleVersionEnum;
}
export declare class PostCreateRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateRuleRequest extends SpeakeasyBase {
    queryParams: PostCreateRuleQueryParams;
    headers: PostCreateRuleHeaders;
    request?: Uint8Array;
}
export declare class PostCreateRuleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
