import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PrincipalPermissions } from "./principalpermissions";
import { DatabaseIdentifier } from "./databaseidentifier";


// Database
/** 
 * The <code>Database</code> object represents a logical grouping of tables that might reside in a Hive metastore or an RDBMS.
**/
export class Database extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=CreateTableDefaultPermissions", elemType: shared.PrincipalPermissions })
  createTableDefaultPermissions?: PrincipalPermissions[];

  @Metadata({ data: "json, name=CreateTime" })
  createTime?: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=LocationUri" })
  locationUri?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string>;

  @Metadata({ data: "json, name=TargetDatabase" })
  targetDatabase?: DatabaseIdentifier;
}
