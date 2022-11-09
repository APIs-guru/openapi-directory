import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RdsHttpEndpointConfig } from "./rdshttpendpointconfig";
import { RelationalDatabaseSourceTypeEnum } from "./relationaldatabasesourcetypeenum";


// RelationalDatabaseDataSourceConfig
/** 
 * Describes a relational database data source configuration.
**/
export class RelationalDatabaseDataSourceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=rdsHttpEndpointConfig" })
  rdsHttpEndpointConfig?: RdsHttpEndpointConfig;

  @Metadata({ data: "json, name=relationalDatabaseSourceType" })
  relationalDatabaseSourceType?: RelationalDatabaseSourceTypeEnum;
}
