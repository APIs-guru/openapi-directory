import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetResetNetworkInterfaceAttributeActionEnum {
    ResetNetworkInterfaceAttribute = "ResetNetworkInterfaceAttribute"
}
export declare enum GetResetNetworkInterfaceAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetResetNetworkInterfaceAttributeQueryParams extends SpeakeasyBase {
    action: GetResetNetworkInterfaceAttributeActionEnum;
    dryRun?: boolean;
    networkInterfaceId: string;
    sourceDestCheck?: string;
    version: GetResetNetworkInterfaceAttributeVersionEnum;
}
export declare class GetResetNetworkInterfaceAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetResetNetworkInterfaceAttributeRequest extends SpeakeasyBase {
    queryParams: GetResetNetworkInterfaceAttributeQueryParams;
    headers: GetResetNetworkInterfaceAttributeHeaders;
}
export declare class GetResetNetworkInterfaceAttributeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
