import { SpeakeasyBase } from "../../../internal/utils";
export declare class DescribeScalingPlanResourcesRequest extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    scalingPlanName: string;
    scalingPlanVersion: number;
}
