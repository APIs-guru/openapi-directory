import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LatLonOptions
/** 
 * Options for a latlon field. A latlon field contains a location stored as a latitude and longitude value pair. Present if <code>IndexFieldType</code> specifies the field is of type <code>latlon</code>. All options are enabled by default.
**/
export class LatLonOptions extends SpeakeasyBase {
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
