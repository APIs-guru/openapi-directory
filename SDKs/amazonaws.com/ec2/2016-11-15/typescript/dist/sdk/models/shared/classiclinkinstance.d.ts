import { SpeakeasyBase } from "../../../internal/utils";
import { GroupIdentifier } from "./groupidentifier";
import { Tag } from "./tag";
/**
 * Describes a linked EC2-Classic instance.
**/
export declare class ClassicLinkInstance extends SpeakeasyBase {
    groups?: GroupIdentifier[];
    instanceId?: string;
    tags?: Tag[];
    vpcId?: string;
}
