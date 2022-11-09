import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Dataset } from "./dataset";


// DescribeDatasetResponse
/** 
 * Response to a successful DescribeDataset request.
**/
export class DescribeDatasetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Dataset" })
  dataset?: Dataset;
}
