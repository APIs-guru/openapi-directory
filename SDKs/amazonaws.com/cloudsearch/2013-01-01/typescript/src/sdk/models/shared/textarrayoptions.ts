import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TextArrayOptions
/** 
 * Options for a field that contains an array of text strings. Present if <code>IndexFieldType</code> specifies the field is of type <code>text-array</code>. A <code>text-array</code> field is always searchable. All options are enabled by default.
**/
export class TextArrayOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  analysisScheme?: string;

  @SpeakeasyMetadata()
  defaultValue?: string;

  @SpeakeasyMetadata()
  highlightEnabled?: boolean;

  @SpeakeasyMetadata()
  returnEnabled?: boolean;

  @SpeakeasyMetadata()
  sourceFields?: string;
}
