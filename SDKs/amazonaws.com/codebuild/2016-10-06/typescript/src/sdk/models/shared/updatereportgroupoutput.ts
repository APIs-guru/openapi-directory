import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportGroup } from "./reportgroup";



export class UpdateReportGroupOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reportGroup" })
  reportGroup?: ReportGroup;
}
