import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TextOptions
/** 
 * Options for text field. Present if <code>IndexFieldType</code> specifies the field is of type <code>text</code>. A <code>text</code> field is always searchable. All options are enabled by default.
**/
export class TextOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  analysisScheme?: string;

  @SpeakeasyMetadata()
  defaultValue?: string;

  @SpeakeasyMetadata()
  highlightEnabled?: boolean;

  @SpeakeasyMetadata()
  returnEnabled?: boolean;

  @SpeakeasyMetadata()
  sortEnabled?: boolean;

  @SpeakeasyMetadata()
  sourceField?: string;
}
