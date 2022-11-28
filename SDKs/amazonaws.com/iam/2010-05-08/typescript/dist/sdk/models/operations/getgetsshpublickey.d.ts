import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetGetSshPublicKeyActionEnum {
    GetSshPublicKey = "GetSSHPublicKey"
}
export declare enum GetGetSshPublicKeyEncodingEnum {
    Ssh = "SSH",
    Pem = "PEM"
}
export declare enum GetGetSshPublicKeyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetGetSshPublicKeyQueryParams extends SpeakeasyBase {
    action: GetGetSshPublicKeyActionEnum;
    encoding: GetGetSshPublicKeyEncodingEnum;
    sshPublicKeyId: string;
    userName: string;
    version: GetGetSshPublicKeyVersionEnum;
}
export declare class GetGetSshPublicKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetSshPublicKeyRequest extends SpeakeasyBase {
    queryParams: GetGetSshPublicKeyQueryParams;
    headers: GetGetSshPublicKeyHeaders;
}
export declare class GetGetSshPublicKeyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
