import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetModifyNetworkInterfaceAttributeActionEnum {
    ModifyNetworkInterfaceAttribute = "ModifyNetworkInterfaceAttribute"
}
/**
 * Describes an attachment change.
**/
export declare class GetModifyNetworkInterfaceAttributeAttachment extends SpeakeasyBase {
    attachmentId?: string;
    deleteOnTermination?: boolean;
}
/**
 * Describes a value for a resource attribute that is a String.
**/
export declare class GetModifyNetworkInterfaceAttributeDescription extends SpeakeasyBase {
    value?: string;
}
/**
 * Describes a value for a resource attribute that is a Boolean value.
**/
export declare class GetModifyNetworkInterfaceAttributeSourceDestCheck extends SpeakeasyBase {
    value?: boolean;
}
export declare enum GetModifyNetworkInterfaceAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetModifyNetworkInterfaceAttributeQueryParams extends SpeakeasyBase {
    action: GetModifyNetworkInterfaceAttributeActionEnum;
    attachment?: GetModifyNetworkInterfaceAttributeAttachment;
    description?: GetModifyNetworkInterfaceAttributeDescription;
    dryRun?: boolean;
    networkInterfaceId: string;
    securityGroupId?: string[];
    sourceDestCheck?: GetModifyNetworkInterfaceAttributeSourceDestCheck;
    version: GetModifyNetworkInterfaceAttributeVersionEnum;
}
export declare class GetModifyNetworkInterfaceAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyNetworkInterfaceAttributeRequest extends SpeakeasyBase {
    queryParams: GetModifyNetworkInterfaceAttributeQueryParams;
    headers: GetModifyNetworkInterfaceAttributeHeaders;
}
export declare class GetModifyNetworkInterfaceAttributeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
