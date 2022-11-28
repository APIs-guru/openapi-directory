import { SpeakeasyBase } from "../../../internal/utils";
import { ScalingStatusTypeEnum } from "./scalingstatustypeenum";
/**
 * Represents the input for a request operation.
**/
export declare class DescribeScalingPoliciesInput extends SpeakeasyBase {
    fleetId: string;
    limit?: number;
    location?: string;
    nextToken?: string;
    statusFilter?: ScalingStatusTypeEnum;
}
