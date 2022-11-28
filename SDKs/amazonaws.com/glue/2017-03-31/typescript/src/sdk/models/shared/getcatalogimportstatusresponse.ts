import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CatalogImportStatus } from "./catalogimportstatus";



export class GetCatalogImportStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ImportStatus" })
  importStatus?: CatalogImportStatus;
}
