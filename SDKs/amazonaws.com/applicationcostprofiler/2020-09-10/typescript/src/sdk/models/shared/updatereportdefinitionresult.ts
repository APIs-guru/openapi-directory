import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateReportDefinitionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=reportId" })
  reportId?: string;
}
