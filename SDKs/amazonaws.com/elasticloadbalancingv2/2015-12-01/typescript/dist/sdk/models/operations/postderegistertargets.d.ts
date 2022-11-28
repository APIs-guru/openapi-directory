import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeregisterTargetsActionEnum {
    DeregisterTargets = "DeregisterTargets"
}
export declare enum PostDeregisterTargetsVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class PostDeregisterTargetsQueryParams extends SpeakeasyBase {
    action: PostDeregisterTargetsActionEnum;
    version: PostDeregisterTargetsVersionEnum;
}
export declare class PostDeregisterTargetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeregisterTargetsRequest extends SpeakeasyBase {
    queryParams: PostDeregisterTargetsQueryParams;
    headers: PostDeregisterTargetsHeaders;
    request?: Uint8Array;
}
export declare class PostDeregisterTargetsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
