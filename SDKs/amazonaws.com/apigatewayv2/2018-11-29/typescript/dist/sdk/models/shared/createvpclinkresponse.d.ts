import { SpeakeasyBase } from "../../../internal/utils";
import { VpcLinkStatusEnum } from "./vpclinkstatusenum";
import { VpcLinkVersionEnum } from "./vpclinkversionenum";
export declare class CreateVpcLinkResponse extends SpeakeasyBase {
    createdDate?: Date;
    name?: string;
    securityGroupIds?: string[];
    subnetIds?: string[];
    tags?: Map<string, string>;
    vpcLinkId?: string;
    vpcLinkStatus?: VpcLinkStatusEnum;
    vpcLinkStatusMessage?: string;
    vpcLinkVersion?: VpcLinkVersionEnum;
}
