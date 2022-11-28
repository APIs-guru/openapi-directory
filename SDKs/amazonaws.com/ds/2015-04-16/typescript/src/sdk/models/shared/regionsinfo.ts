import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RegionsInfo
/** 
 * Provides information about the Regions that are configured for multi-Region replication.
**/
export class RegionsInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdditionalRegions" })
  additionalRegions?: string[];

  @SpeakeasyMetadata({ data: "json, name=PrimaryRegion" })
  primaryRegion?: string;
}
