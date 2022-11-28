import { SpeakeasyBase } from "../../../internal/utils";
import { TierEnum } from "./tierenum";
export declare class DescribeComponentConfigurationRecommendationRequest extends SpeakeasyBase {
    componentName: string;
    resourceGroupName: string;
    tier: TierEnum;
}
