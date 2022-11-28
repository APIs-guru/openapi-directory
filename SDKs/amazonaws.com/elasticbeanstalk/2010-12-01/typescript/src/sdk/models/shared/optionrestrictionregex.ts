import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OptionRestrictionRegex
/** 
 * A regular expression representing a restriction on a string configuration option value.
**/
export class OptionRestrictionRegex extends SpeakeasyBase {
  @SpeakeasyMetadata()
  label?: string;

  @SpeakeasyMetadata()
  pattern?: string;
}
