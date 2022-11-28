import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostUpdateSshPublicKeyActionEnum {
    UpdateSshPublicKey = "UpdateSSHPublicKey"
}
export declare enum PostUpdateSshPublicKeyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostUpdateSshPublicKeyQueryParams extends SpeakeasyBase {
    action: PostUpdateSshPublicKeyActionEnum;
    version: PostUpdateSshPublicKeyVersionEnum;
}
export declare class PostUpdateSshPublicKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUpdateSshPublicKeyRequest extends SpeakeasyBase {
    queryParams: PostUpdateSshPublicKeyQueryParams;
    headers: PostUpdateSshPublicKeyHeaders;
    request?: Uint8Array;
}
export declare class PostUpdateSshPublicKeyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
