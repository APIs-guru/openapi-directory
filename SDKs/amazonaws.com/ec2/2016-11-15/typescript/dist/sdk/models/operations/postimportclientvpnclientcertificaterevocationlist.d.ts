import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostImportClientVpnClientCertificateRevocationListActionEnum {
    ImportClientVpnClientCertificateRevocationList = "ImportClientVpnClientCertificateRevocationList"
}
export declare enum PostImportClientVpnClientCertificateRevocationListVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostImportClientVpnClientCertificateRevocationListQueryParams extends SpeakeasyBase {
    action: PostImportClientVpnClientCertificateRevocationListActionEnum;
    version: PostImportClientVpnClientCertificateRevocationListVersionEnum;
}
export declare class PostImportClientVpnClientCertificateRevocationListHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostImportClientVpnClientCertificateRevocationListRequest extends SpeakeasyBase {
    queryParams: PostImportClientVpnClientCertificateRevocationListQueryParams;
    headers: PostImportClientVpnClientCertificateRevocationListHeaders;
    request?: Uint8Array;
}
export declare class PostImportClientVpnClientCertificateRevocationListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
