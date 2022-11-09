import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TableIdentifier
/** 
 * A structure that describes a target table for resource linking.
**/
export class TableIdentifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=DatabaseName" })
  databaseName?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
