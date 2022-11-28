import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScalableDimensionEnum } from "./scalabledimensionenum";
import { ScalingPolicy } from "./scalingpolicy";
import { ScalingStatusCodeEnum } from "./scalingstatuscodeenum";
import { ServiceNamespaceEnum } from "./servicenamespaceenum";



// ScalingPlanResource
/** 
 * Represents a scalable resource.
**/
export class ScalingPlanResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @SpeakeasyMetadata({ data: "json, name=ScalableDimension" })
  scalableDimension: ScalableDimensionEnum;

  @SpeakeasyMetadata({ data: "json, name=ScalingPlanName" })
  scalingPlanName: string;

  @SpeakeasyMetadata({ data: "json, name=ScalingPlanVersion" })
  scalingPlanVersion: number;

  @SpeakeasyMetadata({ data: "json, name=ScalingPolicies", elemType: ScalingPolicy })
  scalingPolicies?: ScalingPolicy[];

  @SpeakeasyMetadata({ data: "json, name=ScalingStatusCode" })
  scalingStatusCode: ScalingStatusCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=ScalingStatusMessage" })
  scalingStatusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceNamespace" })
  serviceNamespace: ServiceNamespaceEnum;
}
