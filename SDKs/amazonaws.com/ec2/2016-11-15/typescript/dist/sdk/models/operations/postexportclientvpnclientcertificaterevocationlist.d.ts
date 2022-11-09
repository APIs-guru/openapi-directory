import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostExportClientVpnClientCertificateRevocationListActionEnum {
    ExportClientVpnClientCertificateRevocationList = "ExportClientVpnClientCertificateRevocationList"
}
export declare enum PostExportClientVpnClientCertificateRevocationListVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostExportClientVpnClientCertificateRevocationListQueryParams extends SpeakeasyBase {
    action: PostExportClientVpnClientCertificateRevocationListActionEnum;
    version: PostExportClientVpnClientCertificateRevocationListVersionEnum;
}
export declare class PostExportClientVpnClientCertificateRevocationListHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostExportClientVpnClientCertificateRevocationListRequest extends SpeakeasyBase {
    queryParams: PostExportClientVpnClientCertificateRevocationListQueryParams;
    headers: PostExportClientVpnClientCertificateRevocationListHeaders;
    request?: Uint8Array;
}
export declare class PostExportClientVpnClientCertificateRevocationListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
