import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkGroupSummary } from "./workgroupsummary";



export class ListWorkGroupsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkGroups", elemType: WorkGroupSummary })
  workGroups?: WorkGroupSummary[];
}
