import { SpeakeasyBase } from "../../../internal/utils";
import { DataCatalogSummary } from "./datacatalogsummary";
export declare class ListDataCatalogsOutput extends SpeakeasyBase {
    dataCatalogsSummary?: DataCatalogSummary[];
    nextToken?: string;
}
