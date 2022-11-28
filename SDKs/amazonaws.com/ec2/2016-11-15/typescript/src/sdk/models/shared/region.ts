import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Region
/** 
 * Describes a Region.
**/
export class Region extends SpeakeasyBase {
  @SpeakeasyMetadata()
  endpoint?: string;

  @SpeakeasyMetadata()
  optInStatus?: string;

  @SpeakeasyMetadata()
  regionName?: string;
}
