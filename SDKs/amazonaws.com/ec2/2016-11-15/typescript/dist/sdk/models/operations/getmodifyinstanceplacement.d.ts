import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetModifyInstancePlacementActionEnum {
    ModifyInstancePlacement = "ModifyInstancePlacement"
}
export declare enum GetModifyInstancePlacementAffinityEnum {
    Default = "default",
    Host = "host"
}
export declare enum GetModifyInstancePlacementTenancyEnum {
    Dedicated = "dedicated",
    Host = "host"
}
export declare enum GetModifyInstancePlacementVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetModifyInstancePlacementQueryParams extends SpeakeasyBase {
    action: GetModifyInstancePlacementActionEnum;
    affinity?: GetModifyInstancePlacementAffinityEnum;
    groupName?: string;
    hostId?: string;
    hostResourceGroupArn?: string;
    instanceId: string;
    partitionNumber?: number;
    tenancy?: GetModifyInstancePlacementTenancyEnum;
    version: GetModifyInstancePlacementVersionEnum;
}
export declare class GetModifyInstancePlacementHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyInstancePlacementRequest extends SpeakeasyBase {
    queryParams: GetModifyInstancePlacementQueryParams;
    headers: GetModifyInstancePlacementHeaders;
}
export declare class GetModifyInstancePlacementResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
