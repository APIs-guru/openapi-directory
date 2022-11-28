import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportGroup } from "./reportgroup";



export class BatchGetReportGroupsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reportGroups", elemType: ReportGroup })
  reportGroups?: ReportGroup[];

  @SpeakeasyMetadata({ data: "json, name=reportGroupsNotFound" })
  reportGroupsNotFound?: string[];
}
