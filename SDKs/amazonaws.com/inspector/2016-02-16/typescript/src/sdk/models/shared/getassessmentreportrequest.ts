import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReportFileFormatEnum } from "./reportfileformatenum";
import { ReportTypeEnum } from "./reporttypeenum";


export class GetAssessmentReportRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessmentRunArn" })
  assessmentRunArn: string;

  @Metadata({ data: "json, name=reportFileFormat" })
  reportFileFormat: ReportFileFormatEnum;

  @Metadata({ data: "json, name=reportType" })
  reportType: ReportTypeEnum;
}
