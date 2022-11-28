import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportFileFormatEnum } from "./reportfileformatenum";
import { ReportTypeEnum } from "./reporttypeenum";



export class GetAssessmentReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentRunArn" })
  assessmentRunArn: string;

  @SpeakeasyMetadata({ data: "json, name=reportFileFormat" })
  reportFileFormat: ReportFileFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=reportType" })
  reportType: ReportTypeEnum;
}
