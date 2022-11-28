import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes VPC configuration information for fleets and image builders.
**/
export declare class VpcConfig extends SpeakeasyBase {
    securityGroupIds?: string[];
    subnetIds?: string[];
}
