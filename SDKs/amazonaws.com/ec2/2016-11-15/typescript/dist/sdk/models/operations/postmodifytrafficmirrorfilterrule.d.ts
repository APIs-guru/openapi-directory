import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyTrafficMirrorFilterRuleActionEnum {
    ModifyTrafficMirrorFilterRule = "ModifyTrafficMirrorFilterRule"
}
export declare enum PostModifyTrafficMirrorFilterRuleVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostModifyTrafficMirrorFilterRuleQueryParams extends SpeakeasyBase {
    action: PostModifyTrafficMirrorFilterRuleActionEnum;
    version: PostModifyTrafficMirrorFilterRuleVersionEnum;
}
export declare class PostModifyTrafficMirrorFilterRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyTrafficMirrorFilterRuleRequest extends SpeakeasyBase {
    queryParams: PostModifyTrafficMirrorFilterRuleQueryParams;
    headers: PostModifyTrafficMirrorFilterRuleHeaders;
    request?: Uint8Array;
}
export declare class PostModifyTrafficMirrorFilterRuleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
