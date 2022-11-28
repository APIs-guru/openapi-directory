import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateTrafficMirrorFilterRuleActionEnum {
    CreateTrafficMirrorFilterRule = "CreateTrafficMirrorFilterRule"
}
export declare enum PostCreateTrafficMirrorFilterRuleVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateTrafficMirrorFilterRuleQueryParams extends SpeakeasyBase {
    action: PostCreateTrafficMirrorFilterRuleActionEnum;
    version: PostCreateTrafficMirrorFilterRuleVersionEnum;
}
export declare class PostCreateTrafficMirrorFilterRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateTrafficMirrorFilterRuleRequest extends SpeakeasyBase {
    queryParams: PostCreateTrafficMirrorFilterRuleQueryParams;
    headers: PostCreateTrafficMirrorFilterRuleHeaders;
    request?: Uint8Array;
}
export declare class PostCreateTrafficMirrorFilterRuleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
