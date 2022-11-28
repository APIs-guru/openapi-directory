import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteTrafficMirrorFilterRuleActionEnum {
    DeleteTrafficMirrorFilterRule = "DeleteTrafficMirrorFilterRule"
}
export declare enum PostDeleteTrafficMirrorFilterRuleVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteTrafficMirrorFilterRuleQueryParams extends SpeakeasyBase {
    action: PostDeleteTrafficMirrorFilterRuleActionEnum;
    version: PostDeleteTrafficMirrorFilterRuleVersionEnum;
}
export declare class PostDeleteTrafficMirrorFilterRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteTrafficMirrorFilterRuleRequest extends SpeakeasyBase {
    queryParams: PostDeleteTrafficMirrorFilterRuleQueryParams;
    headers: PostDeleteTrafficMirrorFilterRuleHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteTrafficMirrorFilterRuleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
