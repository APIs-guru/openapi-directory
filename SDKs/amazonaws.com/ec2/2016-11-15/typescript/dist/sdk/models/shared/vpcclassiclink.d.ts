import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * Describes whether a VPC is enabled for ClassicLink.
**/
export declare class VpcClassicLink extends SpeakeasyBase {
    classicLinkEnabled?: boolean;
    tags?: Tag[];
    vpcId?: string;
}
