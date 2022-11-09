import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetUpdateSigningCertificateActionEnum {
    UpdateSigningCertificate = "UpdateSigningCertificate"
}
export declare enum GetUpdateSigningCertificateStatusEnum {
    Active = "Active",
    Inactive = "Inactive"
}
export declare enum GetUpdateSigningCertificateVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetUpdateSigningCertificateQueryParams extends SpeakeasyBase {
    action: GetUpdateSigningCertificateActionEnum;
    certificateId: string;
    status: GetUpdateSigningCertificateStatusEnum;
    userName?: string;
    version: GetUpdateSigningCertificateVersionEnum;
}
export declare class GetUpdateSigningCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUpdateSigningCertificateRequest extends SpeakeasyBase {
    queryParams: GetUpdateSigningCertificateQueryParams;
    headers: GetUpdateSigningCertificateHeaders;
}
export declare class GetUpdateSigningCertificateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
