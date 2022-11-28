import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IntArrayOptions
/** 
 * Options for a field that contains an array of 64-bit signed integers. Present if <code>IndexFieldType</code> specifies the field is of type <code>int-array</code>. All options are enabled by default.
**/
export class IntArrayOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  defaultValue?: number;

  @SpeakeasyMetadata()
  facetEnabled?: boolean;

  @SpeakeasyMetadata()
  returnEnabled?: boolean;

  @SpeakeasyMetadata()
  searchEnabled?: boolean;

  @SpeakeasyMetadata()
  sourceFields?: string;
}
