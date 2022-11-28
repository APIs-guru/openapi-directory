import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InsightSelector } from "./insightselector";



export class GetInsightSelectorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InsightSelectors", elemType: InsightSelector })
  insightSelectors?: InsightSelector[];

  @SpeakeasyMetadata({ data: "json, name=TrailARN" })
  trailArn?: string;
}
