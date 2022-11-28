import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A tag that can be added to an ElastiCache cluster or replication group. Tags are composed of a Key/Value pair. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. A tag with a null Value is permitted.
**/
export declare class Tag extends SpeakeasyBase {
    key?: string;
    value?: string;
}
