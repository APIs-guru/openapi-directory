import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteSshPublicKeyActionEnum {
    DeleteSshPublicKey = "DeleteSSHPublicKey"
}
export declare enum GetDeleteSshPublicKeyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetDeleteSshPublicKeyQueryParams extends SpeakeasyBase {
    action: GetDeleteSshPublicKeyActionEnum;
    sshPublicKeyId: string;
    userName: string;
    version: GetDeleteSshPublicKeyVersionEnum;
}
export declare class GetDeleteSshPublicKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteSshPublicKeyRequest extends SpeakeasyBase {
    queryParams: GetDeleteSshPublicKeyQueryParams;
    headers: GetDeleteSshPublicKeyHeaders;
}
export declare class GetDeleteSshPublicKeyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
