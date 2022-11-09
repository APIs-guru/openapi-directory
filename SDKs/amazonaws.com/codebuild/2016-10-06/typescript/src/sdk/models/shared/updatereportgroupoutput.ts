import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReportGroup } from "./reportgroup";


export class UpdateReportGroupOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=reportGroup" })
  reportGroup?: ReportGroup;
}
