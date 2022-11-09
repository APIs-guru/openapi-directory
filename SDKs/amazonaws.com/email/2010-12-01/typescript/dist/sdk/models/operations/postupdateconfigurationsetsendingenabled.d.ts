import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostUpdateConfigurationSetSendingEnabledActionEnum {
    UpdateConfigurationSetSendingEnabled = "UpdateConfigurationSetSendingEnabled"
}
export declare enum PostUpdateConfigurationSetSendingEnabledVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostUpdateConfigurationSetSendingEnabledQueryParams extends SpeakeasyBase {
    action: PostUpdateConfigurationSetSendingEnabledActionEnum;
    version: PostUpdateConfigurationSetSendingEnabledVersionEnum;
}
export declare class PostUpdateConfigurationSetSendingEnabledHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUpdateConfigurationSetSendingEnabledRequest extends SpeakeasyBase {
    queryParams: PostUpdateConfigurationSetSendingEnabledQueryParams;
    headers: PostUpdateConfigurationSetSendingEnabledHeaders;
    request?: Uint8Array;
}
export declare class PostUpdateConfigurationSetSendingEnabledResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
