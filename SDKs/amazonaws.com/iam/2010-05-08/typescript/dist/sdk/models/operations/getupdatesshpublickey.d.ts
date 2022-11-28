import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetUpdateSshPublicKeyActionEnum {
    UpdateSshPublicKey = "UpdateSSHPublicKey"
}
export declare enum GetUpdateSshPublicKeyStatusEnum {
    Active = "Active",
    Inactive = "Inactive"
}
export declare enum GetUpdateSshPublicKeyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetUpdateSshPublicKeyQueryParams extends SpeakeasyBase {
    action: GetUpdateSshPublicKeyActionEnum;
    sshPublicKeyId: string;
    status: GetUpdateSshPublicKeyStatusEnum;
    userName: string;
    version: GetUpdateSshPublicKeyVersionEnum;
}
export declare class GetUpdateSshPublicKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUpdateSshPublicKeyRequest extends SpeakeasyBase {
    queryParams: GetUpdateSshPublicKeyQueryParams;
    headers: GetUpdateSshPublicKeyHeaders;
}
export declare class GetUpdateSshPublicKeyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
