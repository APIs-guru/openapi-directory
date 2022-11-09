import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeltaSyncConfig
/** 
 * Describes a Delta Sync configuration.
**/
export class DeltaSyncConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=baseTableTTL" })
  baseTableTtl?: number;

  @Metadata({ data: "json, name=deltaSyncTableName" })
  deltaSyncTableName?: string;

  @Metadata({ data: "json, name=deltaSyncTableTTL" })
  deltaSyncTableTtl?: number;
}
