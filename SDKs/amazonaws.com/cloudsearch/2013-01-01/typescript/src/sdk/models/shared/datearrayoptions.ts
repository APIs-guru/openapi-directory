import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DateArrayOptions
/** 
 * Options for a field that contains an array of dates. Present if <code>IndexFieldType</code> specifies the field is of type <code>date-array</code>. All options are enabled by default.
**/
export class DateArrayOptions extends SpeakeasyBase {
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
