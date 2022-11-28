import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LiteralArrayOptions
/** 
 * Options for a field that contains an array of literal strings. Present if <code>IndexFieldType</code> specifies the field is of type <code>literal-array</code>. All options are enabled by default.
**/
export class LiteralArrayOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  defaultValue?: string;

  @SpeakeasyMetadata()
  facetEnabled?: boolean;

  @SpeakeasyMetadata()
  returnEnabled?: boolean;

  @SpeakeasyMetadata()
  searchEnabled?: boolean;

  @SpeakeasyMetadata()
  sourceFields?: string;
}
