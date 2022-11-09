import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteWarmPoolActionEnum {
    DeleteWarmPool = "DeleteWarmPool"
}
export declare enum PostDeleteWarmPoolVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostDeleteWarmPoolQueryParams extends SpeakeasyBase {
    action: PostDeleteWarmPoolActionEnum;
    version: PostDeleteWarmPoolVersionEnum;
}
export declare class PostDeleteWarmPoolHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteWarmPoolRequest extends SpeakeasyBase {
    queryParams: PostDeleteWarmPoolQueryParams;
    headers: PostDeleteWarmPoolHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteWarmPoolResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
