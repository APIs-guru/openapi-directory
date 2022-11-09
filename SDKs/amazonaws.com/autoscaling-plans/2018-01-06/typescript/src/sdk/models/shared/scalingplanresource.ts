import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ScalableDimensionEnum } from "./scalabledimensionenum";
import { ScalingPolicy } from "./scalingpolicy";
import { ScalingStatusCodeEnum } from "./scalingstatuscodeenum";
import { ServiceNamespaceEnum } from "./servicenamespaceenum";


// ScalingPlanResource
/** 
 * Represents a scalable resource.
**/
export class ScalingPlanResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @Metadata({ data: "json, name=ScalableDimension" })
  scalableDimension: ScalableDimensionEnum;

  @Metadata({ data: "json, name=ScalingPlanName" })
  scalingPlanName: string;

  @Metadata({ data: "json, name=ScalingPlanVersion" })
  scalingPlanVersion: number;

  @Metadata({ data: "json, name=ScalingPolicies", elemType: shared.ScalingPolicy })
  scalingPolicies?: ScalingPolicy[];

  @Metadata({ data: "json, name=ScalingStatusCode" })
  scalingStatusCode: ScalingStatusCodeEnum;

  @Metadata({ data: "json, name=ScalingStatusMessage" })
  scalingStatusMessage?: string;

  @Metadata({ data: "json, name=ServiceNamespace" })
  serviceNamespace: ServiceNamespaceEnum;
}
