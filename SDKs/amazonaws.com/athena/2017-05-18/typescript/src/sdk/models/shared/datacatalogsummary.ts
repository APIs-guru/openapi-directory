import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataCatalogTypeEnum } from "./datacatalogtypeenum";



// DataCatalogSummary
/** 
 * The summary information for the data catalog, which includes its name and type.
**/
export class DataCatalogSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogName" })
  catalogName?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: DataCatalogTypeEnum;
}
