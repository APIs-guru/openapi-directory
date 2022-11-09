import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The Amazon RDS HTTP endpoint configuration.
**/
export declare class RdsHttpEndpointConfig extends SpeakeasyBase {
    awsRegion?: string;
    awsSecretStoreArn?: string;
    databaseName?: string;
    dbClusterIdentifier?: string;
    schema?: string;
}
