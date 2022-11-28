import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateReportDefinitionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reportId" })
  reportId?: string;
}
