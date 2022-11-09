import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TierEnum } from "./tierenum";


export class DescribeComponentConfigurationRecommendationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComponentName" })
  componentName: string;

  @Metadata({ data: "json, name=ResourceGroupName" })
  resourceGroupName: string;

  @Metadata({ data: "json, name=Tier" })
  tier: TierEnum;
}
