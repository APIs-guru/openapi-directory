import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetModifyVpcAttributeActionEnum {
    ModifyVpcAttribute = "ModifyVpcAttribute"
}
/**
 * Describes a value for a resource attribute that is a Boolean value.
**/
export declare class GetModifyVpcAttributeEnableDnsHostnames extends SpeakeasyBase {
    value?: boolean;
}
/**
 * Describes a value for a resource attribute that is a Boolean value.
**/
export declare class GetModifyVpcAttributeEnableDnsSupport extends SpeakeasyBase {
    value?: boolean;
}
export declare enum GetModifyVpcAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetModifyVpcAttributeQueryParams extends SpeakeasyBase {
    action: GetModifyVpcAttributeActionEnum;
    enableDnsHostnames?: GetModifyVpcAttributeEnableDnsHostnames;
    enableDnsSupport?: GetModifyVpcAttributeEnableDnsSupport;
    version: GetModifyVpcAttributeVersionEnum;
    vpcId: string;
}
export declare class GetModifyVpcAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyVpcAttributeRequest extends SpeakeasyBase {
    queryParams: GetModifyVpcAttributeQueryParams;
    headers: GetModifyVpcAttributeHeaders;
}
export declare class GetModifyVpcAttributeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
