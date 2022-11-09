import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * An object representing an Amazon EKS cluster VPC configuration response.
**/
export declare class VpcConfigResponse extends SpeakeasyBase {
    clusterSecurityGroupId?: string;
    endpointPrivateAccess?: boolean;
    endpointPublicAccess?: boolean;
    publicAccessCidrs?: string[];
    securityGroupIds?: string[];
    subnetIds?: string[];
    vpcId?: string;
}
