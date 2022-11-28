import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TierEnum } from "./tierenum";



export class DescribeComponentConfigurationRecommendationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComponentName" })
  componentName: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceGroupName" })
  resourceGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=Tier" })
  tier: TierEnum;
}
