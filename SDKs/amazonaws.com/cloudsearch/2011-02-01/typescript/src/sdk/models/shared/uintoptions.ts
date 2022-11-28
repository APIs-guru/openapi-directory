import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UIntOptions
/** 
 * Options that define a <code>uint</code> field in the search index.
**/
export class UIntOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  defaultValue?: number;
}
