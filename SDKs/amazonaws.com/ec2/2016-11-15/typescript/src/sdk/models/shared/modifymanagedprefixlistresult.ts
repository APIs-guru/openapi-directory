import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ManagedPrefixList } from "./managedprefixlist";



export class ModifyManagedPrefixListResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  prefixList?: ManagedPrefixList;
}
