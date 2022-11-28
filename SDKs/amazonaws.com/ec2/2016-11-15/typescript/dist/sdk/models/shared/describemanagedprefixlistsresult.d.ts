import { SpeakeasyBase } from "../../../internal/utils";
import { ManagedPrefixList } from "./managedprefixlist";
export declare class DescribeManagedPrefixListsResult extends SpeakeasyBase {
    nextToken?: string;
    prefixLists?: ManagedPrefixList[];
}
