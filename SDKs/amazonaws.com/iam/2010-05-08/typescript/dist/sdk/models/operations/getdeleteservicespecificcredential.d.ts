import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteServiceSpecificCredentialActionEnum {
    DeleteServiceSpecificCredential = "DeleteServiceSpecificCredential"
}
export declare enum GetDeleteServiceSpecificCredentialVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetDeleteServiceSpecificCredentialQueryParams extends SpeakeasyBase {
    action: GetDeleteServiceSpecificCredentialActionEnum;
    serviceSpecificCredentialId: string;
    userName?: string;
    version: GetDeleteServiceSpecificCredentialVersionEnum;
}
export declare class GetDeleteServiceSpecificCredentialHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteServiceSpecificCredentialRequest extends SpeakeasyBase {
    queryParams: GetDeleteServiceSpecificCredentialQueryParams;
    headers: GetDeleteServiceSpecificCredentialHeaders;
}
export declare class GetDeleteServiceSpecificCredentialResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
