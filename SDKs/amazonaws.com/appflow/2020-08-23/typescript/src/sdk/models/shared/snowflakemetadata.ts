import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SnowflakeMetadata
/** 
 *  The connector metadata specific to Snowflake. 
**/
export class SnowflakeMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=supportedRegions" })
  supportedRegions?: string[];
}
