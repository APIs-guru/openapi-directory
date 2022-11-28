import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";



// ResourceRequirement
/** 
 * The type and amount of a resource to assign to a container. The supported resource types are GPUs and Elastic Inference accelerators. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-gpu.html">Working with GPUs on Amazon ECS</a> or <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-eia.html">Working with Amazon Elastic Inference on Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i> 
**/
export class ResourceRequirement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type: ResourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
