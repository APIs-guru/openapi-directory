import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteNetworkInterfaceActionEnum {
    DeleteNetworkInterface = "DeleteNetworkInterface"
}
export declare enum GetDeleteNetworkInterfaceVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteNetworkInterfaceQueryParams extends SpeakeasyBase {
    action: GetDeleteNetworkInterfaceActionEnum;
    dryRun?: boolean;
    networkInterfaceId: string;
    version: GetDeleteNetworkInterfaceVersionEnum;
}
export declare class GetDeleteNetworkInterfaceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteNetworkInterfaceRequest extends SpeakeasyBase {
    queryParams: GetDeleteNetworkInterfaceQueryParams;
    headers: GetDeleteNetworkInterfaceHeaders;
}
export declare class GetDeleteNetworkInterfaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
