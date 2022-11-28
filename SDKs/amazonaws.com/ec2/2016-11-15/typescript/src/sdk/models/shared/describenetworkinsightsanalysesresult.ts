import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkInsightsAnalysis } from "./networkinsightsanalysis";



export class DescribeNetworkInsightsAnalysesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: NetworkInsightsAnalysis })
  networkInsightsAnalyses?: NetworkInsightsAnalysis[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
