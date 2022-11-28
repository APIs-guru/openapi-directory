import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Dataset } from "./dataset";



// DeleteDatasetResponse
/** 
 * Response to a successful DeleteDataset request.
**/
export class DeleteDatasetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Dataset" })
  dataset?: Dataset;
}
