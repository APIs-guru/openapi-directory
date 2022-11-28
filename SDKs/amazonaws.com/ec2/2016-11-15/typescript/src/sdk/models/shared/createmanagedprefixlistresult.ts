import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ManagedPrefixList } from "./managedprefixlist";



export class CreateManagedPrefixListResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  prefixList?: ManagedPrefixList;
}
