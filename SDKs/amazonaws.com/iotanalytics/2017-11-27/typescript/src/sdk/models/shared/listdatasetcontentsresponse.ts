import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatasetContentSummary } from "./datasetcontentsummary";



export class ListDatasetContentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasetContentSummaries", elemType: DatasetContentSummary })
  datasetContentSummaries?: DatasetContentSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
