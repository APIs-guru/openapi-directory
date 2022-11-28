import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DateOptions
/** 
 * Options for a date field. Dates and times are specified in UTC (Coordinated Universal Time) according to IETF RFC3339: yyyy-mm-ddT00:00:00Z. Present if <code>IndexFieldType</code> specifies the field is of type <code>date</code>. All options are enabled by default.
**/
export class DateOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  defaultValue?: string;

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
