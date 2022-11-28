import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataCatalogSummary } from "./datacatalogsummary";



export class ListDataCatalogsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataCatalogsSummary", elemType: DataCatalogSummary })
  dataCatalogsSummary?: DataCatalogSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
