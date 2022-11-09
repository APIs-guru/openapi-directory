import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CatalogImportStatus } from "./catalogimportstatus";


export class GetCatalogImportStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ImportStatus" })
  importStatus?: CatalogImportStatus;
}
