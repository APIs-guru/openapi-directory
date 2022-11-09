import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateAccessKeyActionEnum {
    CreateAccessKey = "CreateAccessKey"
}
export declare enum PostCreateAccessKeyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostCreateAccessKeyQueryParams extends SpeakeasyBase {
    action: PostCreateAccessKeyActionEnum;
    version: PostCreateAccessKeyVersionEnum;
}
export declare class PostCreateAccessKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateAccessKeyRequest extends SpeakeasyBase {
    queryParams: PostCreateAccessKeyQueryParams;
    headers: PostCreateAccessKeyHeaders;
    request?: Uint8Array;
}
export declare class PostCreateAccessKeyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
