import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatasetGroupSummary } from "./datasetgroupsummary";



export class ListDatasetGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DatasetGroups", elemType: DatasetGroupSummary })
  datasetGroups?: DatasetGroupSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
