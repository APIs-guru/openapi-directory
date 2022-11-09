import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListSharedReportGroupsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=reportGroups" })
  reportGroups?: string[];
}
