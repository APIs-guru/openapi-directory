import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PrefixListId
/** 
 * Describes a prefix list ID.
**/
export class PrefixListId extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  prefixListId?: string;
}
