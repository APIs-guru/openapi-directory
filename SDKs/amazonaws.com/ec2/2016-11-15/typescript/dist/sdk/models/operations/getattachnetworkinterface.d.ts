import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetAttachNetworkInterfaceActionEnum {
    AttachNetworkInterface = "AttachNetworkInterface"
}
export declare enum GetAttachNetworkInterfaceVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetAttachNetworkInterfaceQueryParams extends SpeakeasyBase {
    action: GetAttachNetworkInterfaceActionEnum;
    deviceIndex: number;
    dryRun?: boolean;
    instanceId: string;
    networkCardIndex?: number;
    networkInterfaceId: string;
    version: GetAttachNetworkInterfaceVersionEnum;
}
export declare class GetAttachNetworkInterfaceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAttachNetworkInterfaceRequest extends SpeakeasyBase {
    queryParams: GetAttachNetworkInterfaceQueryParams;
    headers: GetAttachNetworkInterfaceHeaders;
}
export declare class GetAttachNetworkInterfaceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
