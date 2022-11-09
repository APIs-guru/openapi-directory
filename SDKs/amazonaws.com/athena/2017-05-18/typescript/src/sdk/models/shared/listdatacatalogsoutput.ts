import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataCatalogSummary } from "./datacatalogsummary";


export class ListDataCatalogsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataCatalogsSummary", elemType: shared.DataCatalogSummary })
  dataCatalogsSummary?: DataCatalogSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
