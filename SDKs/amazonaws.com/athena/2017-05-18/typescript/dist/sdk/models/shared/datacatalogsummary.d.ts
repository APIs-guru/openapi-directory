import { SpeakeasyBase } from "../../../internal/utils";
import { DataCatalogTypeEnum } from "./datacatalogtypeenum";
/**
 * The summary information for the data catalog, which includes its name and type.
**/
export declare class DataCatalogSummary extends SpeakeasyBase {
    catalogName?: string;
    type?: DataCatalogTypeEnum;
}
