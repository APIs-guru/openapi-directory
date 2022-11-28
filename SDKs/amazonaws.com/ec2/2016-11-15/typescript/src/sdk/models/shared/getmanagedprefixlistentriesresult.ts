import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PrefixListEntry } from "./prefixlistentry";



export class GetManagedPrefixListEntriesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PrefixListEntry })
  entries?: PrefixListEntry[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
