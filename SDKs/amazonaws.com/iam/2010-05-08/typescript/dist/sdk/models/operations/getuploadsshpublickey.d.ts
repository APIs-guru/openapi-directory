import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetUploadSshPublicKeyActionEnum {
    UploadSshPublicKey = "UploadSSHPublicKey"
}
export declare enum GetUploadSshPublicKeyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetUploadSshPublicKeyQueryParams extends SpeakeasyBase {
    action: GetUploadSshPublicKeyActionEnum;
    sshPublicKeyBody: string;
    userName: string;
    version: GetUploadSshPublicKeyVersionEnum;
}
export declare class GetUploadSshPublicKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUploadSshPublicKeyRequest extends SpeakeasyBase {
    queryParams: GetUploadSshPublicKeyQueryParams;
    headers: GetUploadSshPublicKeyHeaders;
}
export declare class GetUploadSshPublicKeyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
