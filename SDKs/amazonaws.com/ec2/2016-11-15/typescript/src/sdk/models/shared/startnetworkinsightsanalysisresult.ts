import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkInsightsAnalysis } from "./networkinsightsanalysis";



export class StartNetworkInsightsAnalysisResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  networkInsightsAnalysis?: NetworkInsightsAnalysis;
}
