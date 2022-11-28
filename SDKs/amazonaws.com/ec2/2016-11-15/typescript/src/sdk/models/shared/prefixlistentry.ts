import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PrefixListEntry
/** 
 * Describes a prefix list entry.
**/
export class PrefixListEntry extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cidr?: string;

  @SpeakeasyMetadata()
  description?: string;
}
