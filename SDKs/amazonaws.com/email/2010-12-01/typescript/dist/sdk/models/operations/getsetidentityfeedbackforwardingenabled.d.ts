import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetSetIdentityFeedbackForwardingEnabledActionEnum {
    SetIdentityFeedbackForwardingEnabled = "SetIdentityFeedbackForwardingEnabled"
}
export declare enum GetSetIdentityFeedbackForwardingEnabledVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetSetIdentityFeedbackForwardingEnabledQueryParams extends SpeakeasyBase {
    action: GetSetIdentityFeedbackForwardingEnabledActionEnum;
    forwardingEnabled: boolean;
    identity: string;
    version: GetSetIdentityFeedbackForwardingEnabledVersionEnum;
}
export declare class GetSetIdentityFeedbackForwardingEnabledHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSetIdentityFeedbackForwardingEnabledRequest extends SpeakeasyBase {
    queryParams: GetSetIdentityFeedbackForwardingEnabledQueryParams;
    headers: GetSetIdentityFeedbackForwardingEnabledHeaders;
}
export declare class GetSetIdentityFeedbackForwardingEnabledResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
