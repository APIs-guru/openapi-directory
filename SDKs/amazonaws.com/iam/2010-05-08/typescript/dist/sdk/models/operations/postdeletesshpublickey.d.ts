import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteSshPublicKeyActionEnum {
    DeleteSshPublicKey = "DeleteSSHPublicKey"
}
export declare enum PostDeleteSshPublicKeyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostDeleteSshPublicKeyQueryParams extends SpeakeasyBase {
    action: PostDeleteSshPublicKeyActionEnum;
    version: PostDeleteSshPublicKeyVersionEnum;
}
export declare class PostDeleteSshPublicKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteSshPublicKeyRequest extends SpeakeasyBase {
    queryParams: PostDeleteSshPublicKeyQueryParams;
    headers: PostDeleteSshPublicKeyHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteSshPublicKeyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
