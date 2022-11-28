import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetModifyInstanceMetadataOptionsActionEnum {
    ModifyInstanceMetadataOptions = "ModifyInstanceMetadataOptions"
}
export declare enum GetModifyInstanceMetadataOptionsHttpEndpointEnum {
    Disabled = "disabled",
    Enabled = "enabled"
}
export declare enum GetModifyInstanceMetadataOptionsHttpProtocolIpv6Enum {
    Disabled = "disabled",
    Enabled = "enabled"
}
export declare enum GetModifyInstanceMetadataOptionsHttpTokensEnum {
    Optional = "optional",
    Required = "required"
}
export declare enum GetModifyInstanceMetadataOptionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetModifyInstanceMetadataOptionsQueryParams extends SpeakeasyBase {
    action: GetModifyInstanceMetadataOptionsActionEnum;
    dryRun?: boolean;
    httpEndpoint?: GetModifyInstanceMetadataOptionsHttpEndpointEnum;
    httpProtocolIpv6?: GetModifyInstanceMetadataOptionsHttpProtocolIpv6Enum;
    httpPutResponseHopLimit?: number;
    httpTokens?: GetModifyInstanceMetadataOptionsHttpTokensEnum;
    instanceId: string;
    version: GetModifyInstanceMetadataOptionsVersionEnum;
}
export declare class GetModifyInstanceMetadataOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyInstanceMetadataOptionsRequest extends SpeakeasyBase {
    queryParams: GetModifyInstanceMetadataOptionsQueryParams;
    headers: GetModifyInstanceMetadataOptionsHeaders;
}
export declare class GetModifyInstanceMetadataOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
