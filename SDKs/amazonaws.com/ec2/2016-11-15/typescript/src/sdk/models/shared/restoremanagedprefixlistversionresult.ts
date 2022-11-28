import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ManagedPrefixList } from "./managedprefixlist";



export class RestoreManagedPrefixListVersionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  prefixList?: ManagedPrefixList;
}
