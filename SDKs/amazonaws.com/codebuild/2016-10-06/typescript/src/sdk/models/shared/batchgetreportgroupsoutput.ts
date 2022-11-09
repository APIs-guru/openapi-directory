import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReportGroup } from "./reportgroup";


export class BatchGetReportGroupsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=reportGroups", elemType: shared.ReportGroup })
  reportGroups?: ReportGroup[];

  @Metadata({ data: "json, name=reportGroupsNotFound" })
  reportGroupsNotFound?: string[];
}
