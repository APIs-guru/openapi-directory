import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportGroupTrendFieldTypeEnum } from "./reportgrouptrendfieldtypeenum";



export class GetReportGroupTrendInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=numOfReports" })
  numOfReports?: number;

  @SpeakeasyMetadata({ data: "json, name=reportGroupArn" })
  reportGroupArn: string;

  @SpeakeasyMetadata({ data: "json, name=trendField" })
  trendField: ReportGroupTrendFieldTypeEnum;
}
