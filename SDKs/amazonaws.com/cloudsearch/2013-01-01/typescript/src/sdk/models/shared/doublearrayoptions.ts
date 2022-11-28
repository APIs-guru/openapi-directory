import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DoubleArrayOptions
/** 
 * Options for a field that contains an array of double-precision 64-bit floating point values. Present if <code>IndexFieldType</code> specifies the field is of type <code>double-array</code>. All options are enabled by default.
**/
export class DoubleArrayOptions extends SpeakeasyBase {
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
