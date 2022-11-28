import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetCreateServiceSpecificCredentialActionEnum {
    CreateServiceSpecificCredential = "CreateServiceSpecificCredential"
}
export declare enum GetCreateServiceSpecificCredentialVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetCreateServiceSpecificCredentialQueryParams extends SpeakeasyBase {
    action: GetCreateServiceSpecificCredentialActionEnum;
    serviceName: string;
    userName: string;
    version: GetCreateServiceSpecificCredentialVersionEnum;
}
export declare class GetCreateServiceSpecificCredentialHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCreateServiceSpecificCredentialRequest extends SpeakeasyBase {
    queryParams: GetCreateServiceSpecificCredentialQueryParams;
    headers: GetCreateServiceSpecificCredentialHeaders;
}
export declare class GetCreateServiceSpecificCredentialResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
