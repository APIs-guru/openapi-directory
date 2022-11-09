import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostUploadSshPublicKeyActionEnum {
    UploadSshPublicKey = "UploadSSHPublicKey"
}
export declare enum PostUploadSshPublicKeyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostUploadSshPublicKeyQueryParams extends SpeakeasyBase {
    action: PostUploadSshPublicKeyActionEnum;
    version: PostUploadSshPublicKeyVersionEnum;
}
export declare class PostUploadSshPublicKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUploadSshPublicKeyRequest extends SpeakeasyBase {
    queryParams: PostUploadSshPublicKeyQueryParams;
    headers: PostUploadSshPublicKeyHeaders;
    request?: Uint8Array;
}
export declare class PostUploadSshPublicKeyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
