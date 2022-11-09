import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DeltaSyncConfig } from "./deltasyncconfig";
/**
 * Describes an Amazon DynamoDB data source configuration.
**/
export declare class DynamodbDataSourceConfig extends SpeakeasyBase {
    awsRegion: string;
    deltaSyncConfig?: DeltaSyncConfig;
    tableName: string;
    useCallerCredentials?: boolean;
    versioned?: boolean;
}
