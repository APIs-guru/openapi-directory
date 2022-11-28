import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostSetRulePrioritiesActionEnum {
    SetRulePriorities = "SetRulePriorities"
}
export declare enum PostSetRulePrioritiesVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class PostSetRulePrioritiesQueryParams extends SpeakeasyBase {
    action: PostSetRulePrioritiesActionEnum;
    version: PostSetRulePrioritiesVersionEnum;
}
export declare class PostSetRulePrioritiesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostSetRulePrioritiesRequest extends SpeakeasyBase {
    queryParams: PostSetRulePrioritiesQueryParams;
    headers: PostSetRulePrioritiesHeaders;
    request?: Uint8Array;
}
export declare class PostSetRulePrioritiesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
