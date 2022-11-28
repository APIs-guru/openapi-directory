import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataCatalogTypeEnum } from "./datacatalogtypeenum";



export class UpdateDataCatalogInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: DataCatalogTypeEnum;
}
