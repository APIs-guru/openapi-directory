import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides a collection of table statistics in response to a request by the <code>DescribeTableStatistics</code> operation.
**/
export declare class TableStatistics extends SpeakeasyBase {
    ddls?: number;
    deletes?: number;
    fullLoadCondtnlChkFailedRows?: number;
    fullLoadEndTime?: Date;
    fullLoadErrorRows?: number;
    fullLoadReloaded?: boolean;
    fullLoadRows?: number;
    fullLoadStartTime?: Date;
    inserts?: number;
    lastUpdateTime?: Date;
    schemaName?: string;
    tableName?: string;
    tableState?: string;
    updates?: number;
    validationFailedRecords?: number;
    validationPendingRecords?: number;
    validationState?: string;
    validationStateDetails?: string;
    validationSuspendedRecords?: number;
}
