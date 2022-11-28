import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PrincipalPermissions } from "./principalpermissions";
import { DatabaseIdentifier } from "./databaseidentifier";



// Database
/** 
 * The <code>Database</code> object represents a logical grouping of tables that might reside in a Hive metastore or an RDBMS.
**/
export class Database extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=CreateTableDefaultPermissions", elemType: PrincipalPermissions })
  createTableDefaultPermissions?: PrincipalPermissions[];

  @SpeakeasyMetadata({ data: "json, name=CreateTime" })
  createTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=LocationUri" })
  locationUri?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=TargetDatabase" })
  targetDatabase?: DatabaseIdentifier;
}
