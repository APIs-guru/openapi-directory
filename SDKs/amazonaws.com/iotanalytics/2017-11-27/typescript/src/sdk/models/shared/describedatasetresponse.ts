import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Dataset } from "./dataset";


export class DescribeDatasetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataset" })
  dataset?: Dataset;
}
