import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkInsightsPath } from "./networkinsightspath";



export class DescribeNetworkInsightsPathsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: NetworkInsightsPath })
  networkInsightsPaths?: NetworkInsightsPath[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
