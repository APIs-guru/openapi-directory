import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutReportDefinitionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reportId" })
  reportId?: string;
}
