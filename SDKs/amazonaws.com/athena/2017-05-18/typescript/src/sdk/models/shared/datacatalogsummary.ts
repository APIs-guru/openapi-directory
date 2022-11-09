import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataCatalogTypeEnum } from "./datacatalogtypeenum";


// DataCatalogSummary
/** 
 * The summary information for the data catalog, which includes its name and type.
**/
export class DataCatalogSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogName" })
  catalogName?: string;

  @Metadata({ data: "json, name=Type" })
  type?: DataCatalogTypeEnum;
}
