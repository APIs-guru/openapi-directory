import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DescribeScalingPlanResourcesRequest extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    scalingPlanName: string;
    scalingPlanVersion: number;
}
