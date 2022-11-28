import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TableIdentifier
/** 
 * A structure that describes a target table for resource linking.
**/
export class TableIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
