import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetExportClientVpnClientConfigurationActionEnum {
    ExportClientVpnClientConfiguration = "ExportClientVpnClientConfiguration"
}
export declare enum GetExportClientVpnClientConfigurationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetExportClientVpnClientConfigurationQueryParams extends SpeakeasyBase {
    action: GetExportClientVpnClientConfigurationActionEnum;
    clientVpnEndpointId: string;
    dryRun?: boolean;
    version: GetExportClientVpnClientConfigurationVersionEnum;
}
export declare class GetExportClientVpnClientConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetExportClientVpnClientConfigurationRequest extends SpeakeasyBase {
    queryParams: GetExportClientVpnClientConfigurationQueryParams;
    headers: GetExportClientVpnClientConfigurationHeaders;
}
export declare class GetExportClientVpnClientConfigurationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
