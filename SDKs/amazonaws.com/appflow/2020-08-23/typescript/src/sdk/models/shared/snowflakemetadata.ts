import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SnowflakeMetadata
/** 
 *  The connector metadata specific to Snowflake. 
**/
export class SnowflakeMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=supportedRegions" })
  supportedRegions?: string[];
}
