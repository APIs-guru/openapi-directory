import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostUpdateAccessKeyActionEnum {
    UpdateAccessKey = "UpdateAccessKey"
}
export declare enum PostUpdateAccessKeyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostUpdateAccessKeyQueryParams extends SpeakeasyBase {
    action: PostUpdateAccessKeyActionEnum;
    version: PostUpdateAccessKeyVersionEnum;
}
export declare class PostUpdateAccessKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUpdateAccessKeyRequest extends SpeakeasyBase {
    queryParams: PostUpdateAccessKeyQueryParams;
    headers: PostUpdateAccessKeyHeaders;
    request?: Uint8Array;
}
export declare class PostUpdateAccessKeyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
