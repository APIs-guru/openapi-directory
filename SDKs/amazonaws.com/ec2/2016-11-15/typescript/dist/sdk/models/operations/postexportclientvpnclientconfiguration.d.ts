import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostExportClientVpnClientConfigurationActionEnum {
    ExportClientVpnClientConfiguration = "ExportClientVpnClientConfiguration"
}
export declare enum PostExportClientVpnClientConfigurationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostExportClientVpnClientConfigurationQueryParams extends SpeakeasyBase {
    action: PostExportClientVpnClientConfigurationActionEnum;
    version: PostExportClientVpnClientConfigurationVersionEnum;
}
export declare class PostExportClientVpnClientConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostExportClientVpnClientConfigurationRequest extends SpeakeasyBase {
    queryParams: PostExportClientVpnClientConfigurationQueryParams;
    headers: PostExportClientVpnClientConfigurationHeaders;
    request?: Uint8Array;
}
export declare class PostExportClientVpnClientConfigurationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
