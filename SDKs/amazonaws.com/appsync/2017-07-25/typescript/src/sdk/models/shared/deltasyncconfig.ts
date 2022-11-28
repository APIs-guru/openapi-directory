import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeltaSyncConfig
/** 
 * Describes a Delta Sync configuration.
**/
export class DeltaSyncConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseTableTTL" })
  baseTableTtl?: number;

  @SpeakeasyMetadata({ data: "json, name=deltaSyncTableName" })
  deltaSyncTableName?: string;

  @SpeakeasyMetadata({ data: "json, name=deltaSyncTableTTL" })
  deltaSyncTableTtl?: number;
}
