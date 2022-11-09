import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateSystemModelsPagedClientStatusMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=Limit" })
  limit: number;

  @Metadata({ data: "json, name=Offset" })
  offset: number;

  @Metadata({ data: "json, name=ReportResultExpected" })
  reportResultExpected: string;

  @Metadata({ data: "json, name=ReportResultLabel" })
  reportResultLabel: string;

  @Metadata({ data: "json, name=ReportValueLabel" })
  reportValueLabel: string;

  @Metadata({ data: "json, name=TotalCount" })
  totalCount: number;
}
