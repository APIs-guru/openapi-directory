import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The VPC peering connection options.
**/
export declare class GetModifyVpcPeeringConnectionOptionsAccepterPeeringConnectionOptions extends SpeakeasyBase {
    allowDnsResolutionFromRemoteVpc?: boolean;
    allowEgressFromLocalClassicLinkToRemoteVpc?: boolean;
    allowEgressFromLocalVpcToRemoteClassicLink?: boolean;
}
export declare enum GetModifyVpcPeeringConnectionOptionsActionEnum {
    ModifyVpcPeeringConnectionOptions = "ModifyVpcPeeringConnectionOptions"
}
/**
 * The VPC peering connection options.
**/
export declare class GetModifyVpcPeeringConnectionOptionsRequesterPeeringConnectionOptions extends SpeakeasyBase {
    allowDnsResolutionFromRemoteVpc?: boolean;
    allowEgressFromLocalClassicLinkToRemoteVpc?: boolean;
    allowEgressFromLocalVpcToRemoteClassicLink?: boolean;
}
export declare enum GetModifyVpcPeeringConnectionOptionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetModifyVpcPeeringConnectionOptionsQueryParams extends SpeakeasyBase {
    accepterPeeringConnectionOptions?: GetModifyVpcPeeringConnectionOptionsAccepterPeeringConnectionOptions;
    action: GetModifyVpcPeeringConnectionOptionsActionEnum;
    dryRun?: boolean;
    requesterPeeringConnectionOptions?: GetModifyVpcPeeringConnectionOptionsRequesterPeeringConnectionOptions;
    version: GetModifyVpcPeeringConnectionOptionsVersionEnum;
    vpcPeeringConnectionId: string;
}
export declare class GetModifyVpcPeeringConnectionOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyVpcPeeringConnectionOptionsRequest extends SpeakeasyBase {
    queryParams: GetModifyVpcPeeringConnectionOptionsQueryParams;
    headers: GetModifyVpcPeeringConnectionOptionsHeaders;
}
export declare class GetModifyVpcPeeringConnectionOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
