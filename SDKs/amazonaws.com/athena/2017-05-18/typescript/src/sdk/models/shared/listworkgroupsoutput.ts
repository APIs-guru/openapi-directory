import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WorkGroupSummary } from "./workgroupsummary";


export class ListWorkGroupsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=WorkGroups", elemType: shared.WorkGroupSummary })
  workGroups?: WorkGroupSummary[];
}
