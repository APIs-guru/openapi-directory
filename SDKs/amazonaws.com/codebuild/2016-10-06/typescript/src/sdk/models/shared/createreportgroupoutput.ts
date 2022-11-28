import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportGroup } from "./reportgroup";



export class CreateReportGroupOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reportGroup" })
  reportGroup?: ReportGroup;
}
