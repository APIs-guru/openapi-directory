import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostUpdateAccountSendingEnabledActionEnum {
    UpdateAccountSendingEnabled = "UpdateAccountSendingEnabled"
}
export declare enum PostUpdateAccountSendingEnabledVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostUpdateAccountSendingEnabledQueryParams extends SpeakeasyBase {
    action: PostUpdateAccountSendingEnabledActionEnum;
    version: PostUpdateAccountSendingEnabledVersionEnum;
}
export declare class PostUpdateAccountSendingEnabledHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUpdateAccountSendingEnabledRequest extends SpeakeasyBase {
    queryParams: PostUpdateAccountSendingEnabledQueryParams;
    headers: PostUpdateAccountSendingEnabledHeaders;
    request?: Uint8Array;
}
export declare class PostUpdateAccountSendingEnabledResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
