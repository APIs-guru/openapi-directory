import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDetachNetworkInterfaceActionEnum {
    DetachNetworkInterface = "DetachNetworkInterface"
}
export declare enum GetDetachNetworkInterfaceVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDetachNetworkInterfaceQueryParams extends SpeakeasyBase {
    action: GetDetachNetworkInterfaceActionEnum;
    attachmentId: string;
    dryRun?: boolean;
    force?: boolean;
    version: GetDetachNetworkInterfaceVersionEnum;
}
export declare class GetDetachNetworkInterfaceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDetachNetworkInterfaceRequest extends SpeakeasyBase {
    queryParams: GetDetachNetworkInterfaceQueryParams;
    headers: GetDetachNetworkInterfaceHeaders;
}
export declare class GetDetachNetworkInterfaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
