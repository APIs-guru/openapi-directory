import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TableStatistics
/** 
 * Provides a collection of table statistics in response to a request by the <code>DescribeTableStatistics</code> operation.
**/
export class TableStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Ddls" })
  ddls?: number;

  @SpeakeasyMetadata({ data: "json, name=Deletes" })
  deletes?: number;

  @SpeakeasyMetadata({ data: "json, name=FullLoadCondtnlChkFailedRows" })
  fullLoadCondtnlChkFailedRows?: number;

  @SpeakeasyMetadata({ data: "json, name=FullLoadEndTime" })
  fullLoadEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=FullLoadErrorRows" })
  fullLoadErrorRows?: number;

  @SpeakeasyMetadata({ data: "json, name=FullLoadReloaded" })
  fullLoadReloaded?: boolean;

  @SpeakeasyMetadata({ data: "json, name=FullLoadRows" })
  fullLoadRows?: number;

  @SpeakeasyMetadata({ data: "json, name=FullLoadStartTime" })
  fullLoadStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Inserts" })
  inserts?: number;

  @SpeakeasyMetadata({ data: "json, name=LastUpdateTime" })
  lastUpdateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=SchemaName" })
  schemaName?: string;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName?: string;

  @SpeakeasyMetadata({ data: "json, name=TableState" })
  tableState?: string;

  @SpeakeasyMetadata({ data: "json, name=Updates" })
  updates?: number;

  @SpeakeasyMetadata({ data: "json, name=ValidationFailedRecords" })
  validationFailedRecords?: number;

  @SpeakeasyMetadata({ data: "json, name=ValidationPendingRecords" })
  validationPendingRecords?: number;

  @SpeakeasyMetadata({ data: "json, name=ValidationState" })
  validationState?: string;

  @SpeakeasyMetadata({ data: "json, name=ValidationStateDetails" })
  validationStateDetails?: string;

  @SpeakeasyMetadata({ data: "json, name=ValidationSuspendedRecords" })
  validationSuspendedRecords?: number;
}
