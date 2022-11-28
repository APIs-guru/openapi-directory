import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetExportClientVpnClientCertificateRevocationListActionEnum {
    ExportClientVpnClientCertificateRevocationList = "ExportClientVpnClientCertificateRevocationList"
}
export declare enum GetExportClientVpnClientCertificateRevocationListVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetExportClientVpnClientCertificateRevocationListQueryParams extends SpeakeasyBase {
    action: GetExportClientVpnClientCertificateRevocationListActionEnum;
    clientVpnEndpointId: string;
    dryRun?: boolean;
    version: GetExportClientVpnClientCertificateRevocationListVersionEnum;
}
export declare class GetExportClientVpnClientCertificateRevocationListHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetExportClientVpnClientCertificateRevocationListRequest extends SpeakeasyBase {
    queryParams: GetExportClientVpnClientCertificateRevocationListQueryParams;
    headers: GetExportClientVpnClientCertificateRevocationListHeaders;
}
export declare class GetExportClientVpnClientCertificateRevocationListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
