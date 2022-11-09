import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class QueryForecastRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndDate" })
  endDate?: string;

  @Metadata({ data: "json, name=Filters" })
  filters: Map<string, string>;

  @Metadata({ data: "json, name=ForecastArn" })
  forecastArn: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=StartDate" })
  startDate?: string;
}
