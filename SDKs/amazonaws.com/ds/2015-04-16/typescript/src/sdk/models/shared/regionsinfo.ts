import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RegionsInfo
/** 
 * Provides information about the Regions that are configured for multi-Region replication.
**/
export class RegionsInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=AdditionalRegions" })
  additionalRegions?: string[];

  @Metadata({ data: "json, name=PrimaryRegion" })
  primaryRegion?: string;
}
