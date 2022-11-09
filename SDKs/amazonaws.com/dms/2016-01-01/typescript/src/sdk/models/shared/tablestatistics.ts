import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TableStatistics
/** 
 * Provides a collection of table statistics in response to a request by the <code>DescribeTableStatistics</code> operation.
**/
export class TableStatistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=Ddls" })
  ddls?: number;

  @Metadata({ data: "json, name=Deletes" })
  deletes?: number;

  @Metadata({ data: "json, name=FullLoadCondtnlChkFailedRows" })
  fullLoadCondtnlChkFailedRows?: number;

  @Metadata({ data: "json, name=FullLoadEndTime" })
  fullLoadEndTime?: Date;

  @Metadata({ data: "json, name=FullLoadErrorRows" })
  fullLoadErrorRows?: number;

  @Metadata({ data: "json, name=FullLoadReloaded" })
  fullLoadReloaded?: boolean;

  @Metadata({ data: "json, name=FullLoadRows" })
  fullLoadRows?: number;

  @Metadata({ data: "json, name=FullLoadStartTime" })
  fullLoadStartTime?: Date;

  @Metadata({ data: "json, name=Inserts" })
  inserts?: number;

  @Metadata({ data: "json, name=LastUpdateTime" })
  lastUpdateTime?: Date;

  @Metadata({ data: "json, name=SchemaName" })
  schemaName?: string;

  @Metadata({ data: "json, name=TableName" })
  tableName?: string;

  @Metadata({ data: "json, name=TableState" })
  tableState?: string;

  @Metadata({ data: "json, name=Updates" })
  updates?: number;

  @Metadata({ data: "json, name=ValidationFailedRecords" })
  validationFailedRecords?: number;

  @Metadata({ data: "json, name=ValidationPendingRecords" })
  validationPendingRecords?: number;

  @Metadata({ data: "json, name=ValidationState" })
  validationState?: string;

  @Metadata({ data: "json, name=ValidationStateDetails" })
  validationStateDetails?: string;

  @Metadata({ data: "json, name=ValidationSuspendedRecords" })
  validationSuspendedRecords?: number;
}
