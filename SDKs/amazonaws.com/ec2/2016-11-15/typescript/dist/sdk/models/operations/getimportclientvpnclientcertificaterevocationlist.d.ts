import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetImportClientVpnClientCertificateRevocationListActionEnum {
    ImportClientVpnClientCertificateRevocationList = "ImportClientVpnClientCertificateRevocationList"
}
export declare enum GetImportClientVpnClientCertificateRevocationListVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetImportClientVpnClientCertificateRevocationListQueryParams extends SpeakeasyBase {
    action: GetImportClientVpnClientCertificateRevocationListActionEnum;
    certificateRevocationList: string;
    clientVpnEndpointId: string;
    dryRun?: boolean;
    version: GetImportClientVpnClientCertificateRevocationListVersionEnum;
}
export declare class GetImportClientVpnClientCertificateRevocationListHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetImportClientVpnClientCertificateRevocationListRequest extends SpeakeasyBase {
    queryParams: GetImportClientVpnClientCertificateRevocationListQueryParams;
    headers: GetImportClientVpnClientCertificateRevocationListHeaders;
}
export declare class GetImportClientVpnClientCertificateRevocationListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
