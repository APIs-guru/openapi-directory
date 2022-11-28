import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CatalogImportStatus
/** 
 * A structure containing migration status information.
**/
export class CatalogImportStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ImportCompleted" })
  importCompleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ImportTime" })
  importTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ImportedBy" })
  importedBy?: string;
}
