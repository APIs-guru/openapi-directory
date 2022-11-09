import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListReportGroupsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=reportGroups" })
  reportGroups?: string[];
}
