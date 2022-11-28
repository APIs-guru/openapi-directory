import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetUpdateServiceSpecificCredentialActionEnum {
    UpdateServiceSpecificCredential = "UpdateServiceSpecificCredential"
}
export declare enum GetUpdateServiceSpecificCredentialStatusEnum {
    Active = "Active",
    Inactive = "Inactive"
}
export declare enum GetUpdateServiceSpecificCredentialVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetUpdateServiceSpecificCredentialQueryParams extends SpeakeasyBase {
    action: GetUpdateServiceSpecificCredentialActionEnum;
    serviceSpecificCredentialId: string;
    status: GetUpdateServiceSpecificCredentialStatusEnum;
    userName?: string;
    version: GetUpdateServiceSpecificCredentialVersionEnum;
}
export declare class GetUpdateServiceSpecificCredentialHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUpdateServiceSpecificCredentialRequest extends SpeakeasyBase {
    queryParams: GetUpdateServiceSpecificCredentialQueryParams;
    headers: GetUpdateServiceSpecificCredentialHeaders;
}
export declare class GetUpdateServiceSpecificCredentialResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
