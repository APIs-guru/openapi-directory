import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeComponentConfigurationRecommendationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComponentConfiguration" })
  componentConfiguration?: string;
}
