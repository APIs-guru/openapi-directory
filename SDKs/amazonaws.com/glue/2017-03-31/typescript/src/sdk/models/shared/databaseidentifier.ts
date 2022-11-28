import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DatabaseIdentifier
/** 
 * A structure that describes a target database for resource linking.
**/
export class DatabaseIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName?: string;
}
