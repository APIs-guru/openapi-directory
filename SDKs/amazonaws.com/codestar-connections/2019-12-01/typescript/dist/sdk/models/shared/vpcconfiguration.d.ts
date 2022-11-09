import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The VPC configuration provisioned for the host.
**/
export declare class VpcConfiguration extends SpeakeasyBase {
    securityGroupIds: string[];
    subnetIds: string[];
    tlsCertificate?: string;
    vpcId: string;
}
