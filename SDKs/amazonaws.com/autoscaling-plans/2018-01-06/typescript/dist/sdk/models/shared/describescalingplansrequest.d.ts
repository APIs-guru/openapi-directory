import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationSource } from "./applicationsource";
export declare class DescribeScalingPlansRequest extends SpeakeasyBase {
    applicationSources?: ApplicationSource[];
    maxResults?: number;
    nextToken?: string;
    scalingPlanNames?: string[];
    scalingPlanVersion?: number;
}
