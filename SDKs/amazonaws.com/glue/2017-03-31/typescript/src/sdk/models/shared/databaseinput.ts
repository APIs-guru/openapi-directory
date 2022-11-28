import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PrincipalPermissions } from "./principalpermissions";
import { DatabaseIdentifier } from "./databaseidentifier";



// DatabaseInput
/** 
 * The structure used to create or update a database.
**/
export class DatabaseInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreateTableDefaultPermissions", elemType: PrincipalPermissions })
  createTableDefaultPermissions?: PrincipalPermissions[];

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
