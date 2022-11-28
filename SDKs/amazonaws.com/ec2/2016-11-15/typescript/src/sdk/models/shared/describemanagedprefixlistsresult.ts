import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ManagedPrefixList } from "./managedprefixlist";



export class DescribeManagedPrefixListsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: ManagedPrefixList })
  prefixLists?: ManagedPrefixList[];
}
