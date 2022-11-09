import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InsightSelector } from "./insightselector";


export class PutInsightSelectorsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=InsightSelectors", elemType: shared.InsightSelector })
  insightSelectors?: InsightSelector[];

  @Metadata({ data: "json, name=TrailARN" })
  trailArn?: string;
}
