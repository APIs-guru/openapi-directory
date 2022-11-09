import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataCatalogTypeEnum } from "./datacatalogtypeenum";


export class UpdateDataCatalogInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string>;

  @Metadata({ data: "json, name=Type" })
  type: DataCatalogTypeEnum;
}
