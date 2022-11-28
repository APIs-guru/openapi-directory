import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetAssociateAddressActionEnum {
    AssociateAddress = "AssociateAddress"
}
export declare enum GetAssociateAddressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetAssociateAddressQueryParams extends SpeakeasyBase {
    action: GetAssociateAddressActionEnum;
    allocationId?: string;
    allowReassociation?: boolean;
    dryRun?: boolean;
    instanceId?: string;
    networkInterfaceId?: string;
    privateIpAddress?: string;
    publicIp?: string;
    version: GetAssociateAddressVersionEnum;
}
export declare class GetAssociateAddressHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAssociateAddressRequest extends SpeakeasyBase {
    queryParams: GetAssociateAddressQueryParams;
    headers: GetAssociateAddressHeaders;
}
export declare class GetAssociateAddressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
