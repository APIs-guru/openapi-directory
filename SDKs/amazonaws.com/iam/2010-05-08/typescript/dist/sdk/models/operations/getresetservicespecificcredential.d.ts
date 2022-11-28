import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetResetServiceSpecificCredentialActionEnum {
    ResetServiceSpecificCredential = "ResetServiceSpecificCredential"
}
export declare enum GetResetServiceSpecificCredentialVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetResetServiceSpecificCredentialQueryParams extends SpeakeasyBase {
    action: GetResetServiceSpecificCredentialActionEnum;
    serviceSpecificCredentialId: string;
    userName?: string;
    version: GetResetServiceSpecificCredentialVersionEnum;
}
export declare class GetResetServiceSpecificCredentialHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetResetServiceSpecificCredentialRequest extends SpeakeasyBase {
    queryParams: GetResetServiceSpecificCredentialQueryParams;
    headers: GetResetServiceSpecificCredentialHeaders;
}
export declare class GetResetServiceSpecificCredentialResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
