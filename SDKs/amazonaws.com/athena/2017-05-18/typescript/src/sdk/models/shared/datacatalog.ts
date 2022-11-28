import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataCatalogTypeEnum } from "./datacatalogtypeenum";



// DataCatalog
/** 
 * Contains information about a data catalog in an Amazon Web Services account.
**/
export class DataCatalog extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: DataCatalogTypeEnum;
}
