import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IntOptions
/** 
 * Options for a 64-bit signed integer field. Present if <code>IndexFieldType</code> specifies the field is of type <code>int</code>. All options are enabled by default.
**/
export class IntOptions extends SpeakeasyBase {
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
