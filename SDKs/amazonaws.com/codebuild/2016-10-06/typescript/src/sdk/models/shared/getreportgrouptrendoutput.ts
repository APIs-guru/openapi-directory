import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportWithRawData } from "./reportwithrawdata";
import { ReportGroupTrendStats } from "./reportgrouptrendstats";



export class GetReportGroupTrendOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rawData", elemType: ReportWithRawData })
  rawData?: ReportWithRawData[];

  @SpeakeasyMetadata({ data: "json, name=stats" })
  stats?: ReportGroupTrendStats;
}
