import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetModifySubnetAttributeActionEnum {
    ModifySubnetAttribute = "ModifySubnetAttribute"
}
/**
 * Describes a value for a resource attribute that is a Boolean value.
**/
export declare class GetModifySubnetAttributeAssignIpv6AddressOnCreation extends SpeakeasyBase {
    value?: boolean;
}
/**
 * Describes a value for a resource attribute that is a Boolean value.
**/
export declare class GetModifySubnetAttributeMapCustomerOwnedIpOnLaunch extends SpeakeasyBase {
    value?: boolean;
}
/**
 * Describes a value for a resource attribute that is a Boolean value.
**/
export declare class GetModifySubnetAttributeMapPublicIpOnLaunch extends SpeakeasyBase {
    value?: boolean;
}
export declare enum GetModifySubnetAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetModifySubnetAttributeQueryParams extends SpeakeasyBase {
    action: GetModifySubnetAttributeActionEnum;
    assignIpv6AddressOnCreation?: GetModifySubnetAttributeAssignIpv6AddressOnCreation;
    customerOwnedIpv4Pool?: string;
    mapCustomerOwnedIpOnLaunch?: GetModifySubnetAttributeMapCustomerOwnedIpOnLaunch;
    mapPublicIpOnLaunch?: GetModifySubnetAttributeMapPublicIpOnLaunch;
    subnetId: string;
    version: GetModifySubnetAttributeVersionEnum;
}
export declare class GetModifySubnetAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifySubnetAttributeRequest extends SpeakeasyBase {
    queryParams: GetModifySubnetAttributeQueryParams;
    headers: GetModifySubnetAttributeHeaders;
}
export declare class GetModifySubnetAttributeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
