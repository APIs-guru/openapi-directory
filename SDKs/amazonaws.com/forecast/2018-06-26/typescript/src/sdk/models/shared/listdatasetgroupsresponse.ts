import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DatasetGroupSummary } from "./datasetgroupsummary";


export class ListDatasetGroupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DatasetGroups", elemType: shared.DatasetGroupSummary })
  datasetGroups?: DatasetGroupSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
