import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CatalogImportStatus
/** 
 * A structure containing migration status information.
**/
export class CatalogImportStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=ImportCompleted" })
  importCompleted?: boolean;

  @Metadata({ data: "json, name=ImportTime" })
  importTime?: Date;

  @Metadata({ data: "json, name=ImportedBy" })
  importedBy?: string;
}
