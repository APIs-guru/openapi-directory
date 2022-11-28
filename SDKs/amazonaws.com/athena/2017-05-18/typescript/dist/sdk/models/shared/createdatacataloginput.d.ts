import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { DataCatalogTypeEnum } from "./datacatalogtypeenum";
export declare class CreateDataCatalogInput extends SpeakeasyBase {
    description?: string;
    name: string;
    parameters?: Map<string, string>;
    tags?: Tag[];
    type: DataCatalogTypeEnum;
}
