import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Dataset } from "./dataset";


// DeleteDatasetResponse
/** 
 * Response to a successful DeleteDataset request.
**/
export class DeleteDatasetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Dataset" })
  dataset?: Dataset;
}
