import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteAccessKeyActionEnum {
    DeleteAccessKey = "DeleteAccessKey"
}
export declare enum PostDeleteAccessKeyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostDeleteAccessKeyQueryParams extends SpeakeasyBase {
    action: PostDeleteAccessKeyActionEnum;
    version: PostDeleteAccessKeyVersionEnum;
}
export declare class PostDeleteAccessKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteAccessKeyRequest extends SpeakeasyBase {
    queryParams: PostDeleteAccessKeyQueryParams;
    headers: PostDeleteAccessKeyHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteAccessKeyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
