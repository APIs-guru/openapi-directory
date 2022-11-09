import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RdsHttpEndpointConfig } from "./rdshttpendpointconfig";
import { RelationalDatabaseSourceTypeEnum } from "./relationaldatabasesourcetypeenum";
/**
 * Describes a relational database data source configuration.
**/
export declare class RelationalDatabaseDataSourceConfig extends SpeakeasyBase {
    rdsHttpEndpointConfig?: RdsHttpEndpointConfig;
    relationalDatabaseSourceType?: RelationalDatabaseSourceTypeEnum;
}
