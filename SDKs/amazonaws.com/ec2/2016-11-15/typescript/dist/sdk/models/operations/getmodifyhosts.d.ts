import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetModifyHostsActionEnum {
    ModifyHosts = "ModifyHosts"
}
export declare enum GetModifyHostsAutoPlacementEnum {
    On = "on",
    Off = "off"
}
export declare enum GetModifyHostsHostRecoveryEnum {
    On = "on",
    Off = "off"
}
export declare enum GetModifyHostsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetModifyHostsQueryParams extends SpeakeasyBase {
    action: GetModifyHostsActionEnum;
    autoPlacement?: GetModifyHostsAutoPlacementEnum;
    hostId: string[];
    hostRecovery?: GetModifyHostsHostRecoveryEnum;
    instanceFamily?: string;
    instanceType?: string;
    version: GetModifyHostsVersionEnum;
}
export declare class GetModifyHostsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyHostsRequest extends SpeakeasyBase {
    queryParams: GetModifyHostsQueryParams;
    headers: GetModifyHostsHeaders;
}
export declare class GetModifyHostsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
