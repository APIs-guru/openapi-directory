import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Dataset } from "./dataset";


// ListDatasetsResponse
/** 
 * Returned for a successful ListDatasets request.
**/
export class ListDatasetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Count" })
  count?: number;

  @Metadata({ data: "json, name=Datasets", elemType: shared.Dataset })
  datasets?: Dataset[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
