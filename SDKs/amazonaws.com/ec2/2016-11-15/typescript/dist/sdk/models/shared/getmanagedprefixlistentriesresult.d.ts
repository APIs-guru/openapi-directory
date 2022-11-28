import { SpeakeasyBase } from "../../../internal/utils";
import { PrefixListEntry } from "./prefixlistentry";
export declare class GetManagedPrefixListEntriesResult extends SpeakeasyBase {
    entries?: PrefixListEntry[];
    nextToken?: string;
}
