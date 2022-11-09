import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TargetTypeEnum } from "./targettypeenum";


// Attribute
/** 
 * An attribute is a name-value pair associated with an Amazon ECS object. Attributes enable you to extend the Amazon ECS data model by adding custom metadata to your resources. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html#attributes">Attributes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
**/
export class Attribute extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=targetId" })
  targetId?: string;

  @Metadata({ data: "json, name=targetType" })
  targetType?: TargetTypeEnum;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
