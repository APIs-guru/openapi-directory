import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostPutWarmPoolActionEnum {
    PutWarmPool = "PutWarmPool"
}
export declare enum PostPutWarmPoolVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostPutWarmPoolQueryParams extends SpeakeasyBase {
    action: PostPutWarmPoolActionEnum;
    version: PostPutWarmPoolVersionEnum;
}
export declare class PostPutWarmPoolHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostPutWarmPoolRequest extends SpeakeasyBase {
    queryParams: PostPutWarmPoolQueryParams;
    headers: PostPutWarmPoolHeaders;
    request?: Uint8Array;
}
export declare class PostPutWarmPoolResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
