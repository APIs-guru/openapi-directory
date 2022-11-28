import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies a JDBC data store to crawl.
**/
export declare class JdbcTarget extends SpeakeasyBase {
    connectionName?: string;
    exclusions?: string[];
    path?: string;
}
