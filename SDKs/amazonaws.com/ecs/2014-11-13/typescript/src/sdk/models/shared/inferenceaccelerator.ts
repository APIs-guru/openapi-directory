import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InferenceAccelerator
/** 
 * Details on a Elastic Inference accelerator. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-eia.html">Working with Amazon Elastic Inference on Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
**/
export class InferenceAccelerator extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceName" })
  deviceName: string;

  @SpeakeasyMetadata({ data: "json, name=deviceType" })
  deviceType: string;
}
