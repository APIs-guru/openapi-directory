import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Dataset } from "./dataset";



// ListDatasetsResponse
/** 
 * Returned for a successful ListDatasets request.
**/
export class ListDatasetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=Datasets", elemType: Dataset })
  datasets?: Dataset[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
