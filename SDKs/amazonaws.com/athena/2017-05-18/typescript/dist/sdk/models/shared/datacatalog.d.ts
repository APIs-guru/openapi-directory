import { SpeakeasyBase } from "../../../internal/utils";
import { DataCatalogTypeEnum } from "./datacatalogtypeenum";
/**
 * Contains information about a data catalog in an Amazon Web Services account.
**/
export declare class DataCatalog extends SpeakeasyBase {
    description?: string;
    name: string;
    parameters?: Map<string, string>;
    type: DataCatalogTypeEnum;
}
