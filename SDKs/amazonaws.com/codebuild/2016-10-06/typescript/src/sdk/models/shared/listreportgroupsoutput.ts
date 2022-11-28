import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListReportGroupsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=reportGroups" })
  reportGroups?: string[];
}
