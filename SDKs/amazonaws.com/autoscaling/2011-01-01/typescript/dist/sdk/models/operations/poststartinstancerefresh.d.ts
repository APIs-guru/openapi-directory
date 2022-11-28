import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostStartInstanceRefreshActionEnum {
    StartInstanceRefresh = "StartInstanceRefresh"
}
export declare enum PostStartInstanceRefreshVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostStartInstanceRefreshQueryParams extends SpeakeasyBase {
    action: PostStartInstanceRefreshActionEnum;
    version: PostStartInstanceRefreshVersionEnum;
}
export declare class PostStartInstanceRefreshHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostStartInstanceRefreshRequest extends SpeakeasyBase {
    queryParams: PostStartInstanceRefreshQueryParams;
    headers: PostStartInstanceRefreshHeaders;
    request?: Uint8Array;
}
export declare class PostStartInstanceRefreshResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
