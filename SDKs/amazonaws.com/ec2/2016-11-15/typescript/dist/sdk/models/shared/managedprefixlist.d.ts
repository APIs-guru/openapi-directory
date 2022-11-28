import { SpeakeasyBase } from "../../../internal/utils";
import { PrefixListStateEnum } from "./prefixliststateenum";
import { Tag } from "./tag";
/**
 * Describes a managed prefix list.
**/
export declare class ManagedPrefixList extends SpeakeasyBase {
    addressFamily?: string;
    maxEntries?: number;
    ownerId?: string;
    prefixListArn?: string;
    prefixListId?: string;
    prefixListName?: string;
    state?: PrefixListStateEnum;
    stateMessage?: string;
    tags?: Tag[];
    version?: number;
}
