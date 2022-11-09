import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReportWithRawData } from "./reportwithrawdata";
import { ReportGroupTrendStats } from "./reportgrouptrendstats";


export class GetReportGroupTrendOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=rawData", elemType: shared.ReportWithRawData })
  rawData?: ReportWithRawData[];

  @Metadata({ data: "json, name=stats" })
  stats?: ReportGroupTrendStats;
}
