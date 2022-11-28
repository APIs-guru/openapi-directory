import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostSetIdentityFeedbackForwardingEnabledActionEnum {
    SetIdentityFeedbackForwardingEnabled = "SetIdentityFeedbackForwardingEnabled"
}
export declare enum PostSetIdentityFeedbackForwardingEnabledVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostSetIdentityFeedbackForwardingEnabledQueryParams extends SpeakeasyBase {
    action: PostSetIdentityFeedbackForwardingEnabledActionEnum;
    version: PostSetIdentityFeedbackForwardingEnabledVersionEnum;
}
export declare class PostSetIdentityFeedbackForwardingEnabledHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostSetIdentityFeedbackForwardingEnabledRequest extends SpeakeasyBase {
    queryParams: PostSetIdentityFeedbackForwardingEnabledQueryParams;
    headers: PostSetIdentityFeedbackForwardingEnabledHeaders;
    request?: Uint8Array;
}
export declare class PostSetIdentityFeedbackForwardingEnabledResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
