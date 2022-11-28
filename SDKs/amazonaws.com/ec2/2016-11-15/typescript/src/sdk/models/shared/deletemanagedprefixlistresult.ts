import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ManagedPrefixList } from "./managedprefixlist";



export class DeleteManagedPrefixListResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  prefixList?: ManagedPrefixList;
}
