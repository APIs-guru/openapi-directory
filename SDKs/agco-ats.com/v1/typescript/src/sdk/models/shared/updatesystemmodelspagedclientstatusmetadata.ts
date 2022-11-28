import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateSystemModelsPagedClientStatusMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit: number;

  @SpeakeasyMetadata({ data: "json, name=Offset" })
  offset: number;

  @SpeakeasyMetadata({ data: "json, name=ReportResultExpected" })
  reportResultExpected: string;

  @SpeakeasyMetadata({ data: "json, name=ReportResultLabel" })
  reportResultLabel: string;

  @SpeakeasyMetadata({ data: "json, name=ReportValueLabel" })
  reportValueLabel: string;

  @SpeakeasyMetadata({ data: "json, name=TotalCount" })
  totalCount: number;
}
