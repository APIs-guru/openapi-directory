import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCancelInstanceRefreshActionEnum {
    CancelInstanceRefresh = "CancelInstanceRefresh"
}
export declare enum PostCancelInstanceRefreshVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostCancelInstanceRefreshQueryParams extends SpeakeasyBase {
    action: PostCancelInstanceRefreshActionEnum;
    version: PostCancelInstanceRefreshVersionEnum;
}
export declare class PostCancelInstanceRefreshHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCancelInstanceRefreshRequest extends SpeakeasyBase {
    queryParams: PostCancelInstanceRefreshQueryParams;
    headers: PostCancelInstanceRefreshHeaders;
    request?: Uint8Array;
}
export declare class PostCancelInstanceRefreshResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
