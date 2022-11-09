import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DatasetContentSummary } from "./datasetcontentsummary";


export class ListDatasetContentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasetContentSummaries", elemType: shared.DatasetContentSummary })
  datasetContentSummaries?: DatasetContentSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
