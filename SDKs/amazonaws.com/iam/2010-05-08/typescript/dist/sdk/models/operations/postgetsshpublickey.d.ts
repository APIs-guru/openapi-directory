import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostGetSshPublicKeyActionEnum {
    GetSshPublicKey = "GetSSHPublicKey"
}
export declare enum PostGetSshPublicKeyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostGetSshPublicKeyQueryParams extends SpeakeasyBase {
    action: PostGetSshPublicKeyActionEnum;
    version: PostGetSshPublicKeyVersionEnum;
}
export declare class PostGetSshPublicKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetSshPublicKeyRequest extends SpeakeasyBase {
    queryParams: PostGetSshPublicKeyQueryParams;
    headers: PostGetSshPublicKeyHeaders;
    request?: Uint8Array;
}
export declare class PostGetSshPublicKeyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
