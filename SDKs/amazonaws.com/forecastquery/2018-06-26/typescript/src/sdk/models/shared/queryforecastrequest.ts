import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class QueryForecastRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=Filters" })
  filters: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=ForecastArn" })
  forecastArn: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=StartDate" })
  startDate?: string;
}
