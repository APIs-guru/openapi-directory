import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomizedLoadMetricSpecification } from "./customizedloadmetricspecification";
import { PredefinedLoadMetricSpecification } from "./predefinedloadmetricspecification";
import { PredictiveScalingMaxCapacityBehaviorEnum } from "./predictivescalingmaxcapacitybehaviorenum";
import { PredictiveScalingModeEnum } from "./predictivescalingmodeenum";
import { ScalableDimensionEnum } from "./scalabledimensionenum";
import { ScalingPolicyUpdateBehaviorEnum } from "./scalingpolicyupdatebehaviorenum";
import { ServiceNamespaceEnum } from "./servicenamespaceenum";
import { TargetTrackingConfiguration } from "./targettrackingconfiguration";


// ScalingInstruction
/** 
 * <p>Describes a scaling instruction for a scalable resource in a scaling plan. Each scaling instruction applies to one resource.</p> <p>AWS Auto Scaling creates target tracking scaling policies based on the scaling instructions. Target tracking scaling policies adjust the capacity of your scalable resource as required to maintain resource utilization at the target value that you specified. </p> <p>AWS Auto Scaling also configures predictive scaling for your Amazon EC2 Auto Scaling groups using a subset of parameters, including the load metric, the scaling metric, the target value for the scaling metric, the predictive scaling mode (forecast and scale or forecast only), and the desired behavior when the forecast capacity exceeds the maximum capacity of the resource. With predictive scaling, AWS Auto Scaling generates forecasts with traffic predictions for the two days ahead and schedules scaling actions that proactively add and remove resource capacity to match the forecast. </p> <important> <p>We recommend waiting a minimum of 24 hours after creating an Auto Scaling group to configure predictive scaling. At minimum, there must be 24 hours of historical data to generate a forecast. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/plans/userguide/gs-best-practices.html">Best Practices for AWS Auto Scaling</a> in the <i>AWS Auto Scaling User Guide</i>.</p> </important>
**/
export class ScalingInstruction extends SpeakeasyBase {
  @Metadata({ data: "json, name=CustomizedLoadMetricSpecification" })
  customizedLoadMetricSpecification?: CustomizedLoadMetricSpecification;

  @Metadata({ data: "json, name=DisableDynamicScaling" })
  disableDynamicScaling?: boolean;

  @Metadata({ data: "json, name=MaxCapacity" })
  maxCapacity: number;

  @Metadata({ data: "json, name=MinCapacity" })
  minCapacity: number;

  @Metadata({ data: "json, name=PredefinedLoadMetricSpecification" })
  predefinedLoadMetricSpecification?: PredefinedLoadMetricSpecification;

  @Metadata({ data: "json, name=PredictiveScalingMaxCapacityBehavior" })
  predictiveScalingMaxCapacityBehavior?: PredictiveScalingMaxCapacityBehaviorEnum;

  @Metadata({ data: "json, name=PredictiveScalingMaxCapacityBuffer" })
  predictiveScalingMaxCapacityBuffer?: number;

  @Metadata({ data: "json, name=PredictiveScalingMode" })
  predictiveScalingMode?: PredictiveScalingModeEnum;

  @Metadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @Metadata({ data: "json, name=ScalableDimension" })
  scalableDimension: ScalableDimensionEnum;

  @Metadata({ data: "json, name=ScalingPolicyUpdateBehavior" })
  scalingPolicyUpdateBehavior?: ScalingPolicyUpdateBehaviorEnum;

  @Metadata({ data: "json, name=ScheduledActionBufferTime" })
  scheduledActionBufferTime?: number;

  @Metadata({ data: "json, name=ServiceNamespace" })
  serviceNamespace: ServiceNamespaceEnum;

  @Metadata({ data: "json, name=TargetTrackingConfigurations", elemType: shared.TargetTrackingConfiguration })
  targetTrackingConfigurations: TargetTrackingConfiguration[];
}
