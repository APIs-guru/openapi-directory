import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the allowed node types you can use to modify your cluster or replication group.
**/
export declare class AllowedNodeTypeModificationsMessage extends SpeakeasyBase {
    scaleDownModifications?: string[];
    scaleUpModifications?: string[];
}
