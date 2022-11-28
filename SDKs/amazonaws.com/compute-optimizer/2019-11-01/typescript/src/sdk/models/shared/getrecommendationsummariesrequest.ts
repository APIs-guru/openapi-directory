import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRecommendationSummariesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountIds" })
  accountIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
