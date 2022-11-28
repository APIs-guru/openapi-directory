import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation.
**/
export declare class DirectoryVpcSettings extends SpeakeasyBase {
    subnetIds: string[];
    vpcId: string;
}
