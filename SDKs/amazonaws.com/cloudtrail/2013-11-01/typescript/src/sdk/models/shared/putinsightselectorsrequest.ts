import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InsightSelector } from "./insightselector";


export class PutInsightSelectorsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=InsightSelectors", elemType: shared.InsightSelector })
  insightSelectors: InsightSelector[];

  @Metadata({ data: "json, name=TrailName" })
  trailName: string;
}
