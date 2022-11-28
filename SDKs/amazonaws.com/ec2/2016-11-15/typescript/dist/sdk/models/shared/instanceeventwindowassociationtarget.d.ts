import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * One or more targets associated with the event window.
**/
export declare class InstanceEventWindowAssociationTarget extends SpeakeasyBase {
    dedicatedHostIds?: string[];
    instanceIds?: string[];
    tags?: Tag[];
}
