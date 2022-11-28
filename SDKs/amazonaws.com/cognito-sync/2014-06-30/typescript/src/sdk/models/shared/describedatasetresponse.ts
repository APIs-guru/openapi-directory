import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Dataset } from "./dataset";



// DescribeDatasetResponse
/** 
 * Response to a successful DescribeDataset request.
**/
export class DescribeDatasetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Dataset" })
  dataset?: Dataset;
}
