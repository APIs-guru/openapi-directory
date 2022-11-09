import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostGetAccountSendingEnabledActionEnum {
    GetAccountSendingEnabled = "GetAccountSendingEnabled"
}
export declare enum PostGetAccountSendingEnabledVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostGetAccountSendingEnabledQueryParams extends SpeakeasyBase {
    action: PostGetAccountSendingEnabledActionEnum;
    version: PostGetAccountSendingEnabledVersionEnum;
}
export declare class PostGetAccountSendingEnabledHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetAccountSendingEnabledRequest extends SpeakeasyBase {
    queryParams: PostGetAccountSendingEnabledQueryParams;
    headers: PostGetAccountSendingEnabledHeaders;
}
export declare class PostGetAccountSendingEnabledResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
