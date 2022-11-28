import { SpeakeasyBase } from "../../../internal/utils";
import { VpcLinkStatusEnum } from "./vpclinkstatusenum";
import { VpcLinkVersionEnum } from "./vpclinkversionenum";
/**
 * Represents a VPC link.
**/
export declare class VpcLink extends SpeakeasyBase {
    createdDate?: Date;
    name: string;
    securityGroupIds: string[];
    subnetIds: string[];
    tags?: Map<string, string>;
    vpcLinkId: string;
    vpcLinkStatus?: VpcLinkStatusEnum;
    vpcLinkStatusMessage?: string;
    vpcLinkVersion?: VpcLinkVersionEnum;
}
