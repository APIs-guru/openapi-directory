import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DoubleOptions
/** 
 * Options for a double-precision 64-bit floating point field. Present if <code>IndexFieldType</code> specifies the field is of type <code>double</code>. All options are enabled by default.
**/
export class DoubleOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  defaultValue?: number;

  @SpeakeasyMetadata()
  facetEnabled?: boolean;

  @SpeakeasyMetadata()
  returnEnabled?: boolean;

  @SpeakeasyMetadata()
  searchEnabled?: boolean;

  @SpeakeasyMetadata()
  sortEnabled?: boolean;

  @SpeakeasyMetadata()
  sourceField?: string;
}
