import { SpeakeasyBase } from "../../../internal/utils";
import { DataCatalogTypeEnum } from "./datacatalogtypeenum";
export declare class UpdateDataCatalogInput extends SpeakeasyBase {
    description?: string;
    name: string;
    parameters?: Map<string, string>;
    type: DataCatalogTypeEnum;
}
