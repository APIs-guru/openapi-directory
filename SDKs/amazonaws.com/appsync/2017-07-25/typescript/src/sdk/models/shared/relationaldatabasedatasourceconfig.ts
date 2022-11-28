import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RdsHttpEndpointConfig } from "./rdshttpendpointconfig";
import { RelationalDatabaseSourceTypeEnum } from "./relationaldatabasesourcetypeenum";



// RelationalDatabaseDataSourceConfig
/** 
 * Describes a relational database data source configuration.
**/
export class RelationalDatabaseDataSourceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rdsHttpEndpointConfig" })
  rdsHttpEndpointConfig?: RdsHttpEndpointConfig;

  @SpeakeasyMetadata({ data: "json, name=relationalDatabaseSourceType" })
  relationalDatabaseSourceType?: RelationalDatabaseSourceTypeEnum;
}
