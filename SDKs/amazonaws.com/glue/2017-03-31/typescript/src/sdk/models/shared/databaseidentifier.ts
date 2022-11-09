import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DatabaseIdentifier
/** 
 * A structure that describes a target database for resource linking.
**/
export class DatabaseIdentifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=DatabaseName" })
  databaseName?: string;
}
