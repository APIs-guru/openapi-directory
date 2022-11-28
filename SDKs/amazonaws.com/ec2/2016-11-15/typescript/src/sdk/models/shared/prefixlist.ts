import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PrefixList
/** 
 * Describes prefixes for Amazon Web Services services.
**/
export class PrefixList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cidrs?: string[];

  @SpeakeasyMetadata()
  prefixListId?: string;

  @SpeakeasyMetadata()
  prefixListName?: string;
}
