import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InferenceAcceleratorOverride
/** 
 * Details on an Elastic Inference accelerator task override. This parameter is used to override the Elastic Inference accelerator specified in the task definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-eia.html">Working with Amazon Elastic Inference on Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
**/
export class InferenceAcceleratorOverride extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceName" })
  deviceName?: string;

  @Metadata({ data: "json, name=deviceType" })
  deviceType?: string;
}
