import { SpeakeasyBase } from "../../../internal/utils";
import { ScalableDimensionEnum } from "./scalabledimensionenum";
import { ScalingPolicy } from "./scalingpolicy";
import { ScalingStatusCodeEnum } from "./scalingstatuscodeenum";
import { ServiceNamespaceEnum } from "./servicenamespaceenum";
/**
 * Represents a scalable resource.
**/
export declare class ScalingPlanResource extends SpeakeasyBase {
    resourceId: string;
    scalableDimension: ScalableDimensionEnum;
    scalingPlanName: string;
    scalingPlanVersion: number;
    scalingPolicies?: ScalingPolicy[];
    scalingStatusCode: ScalingStatusCodeEnum;
    scalingStatusMessage?: string;
    serviceNamespace: ServiceNamespaceEnum;
}
