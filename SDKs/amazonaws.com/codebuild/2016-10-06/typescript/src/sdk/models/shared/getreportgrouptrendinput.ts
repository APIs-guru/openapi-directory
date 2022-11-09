import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReportGroupTrendFieldTypeEnum } from "./reportgrouptrendfieldtypeenum";


export class GetReportGroupTrendInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=numOfReports" })
  numOfReports?: number;

  @Metadata({ data: "json, name=reportGroupArn" })
  reportGroupArn: string;

  @Metadata({ data: "json, name=trendField" })
  trendField: ReportGroupTrendFieldTypeEnum;
}
