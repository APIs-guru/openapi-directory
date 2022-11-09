import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * These are custom parameters to be used when the target is a Amazon Redshift cluster to invoke the Amazon Redshift Data API ExecuteStatement based on EventBridge events.
**/
export declare class RedshiftDataParameters extends SpeakeasyBase {
    database: string;
    dbUser?: string;
    secretManagerArn?: string;
    sql: string;
    statementName?: string;
    withEvent?: boolean;
}
