import { SpeakeasyBase } from "../../../internal/utils";
import { TargetTypeEnum } from "./targettypeenum";
/**
 * An attribute is a name-value pair associated with an Amazon ECS object. Attributes enable you to extend the Amazon ECS data model by adding custom metadata to your resources. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html#attributes">Attributes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
**/
export declare class Attribute extends SpeakeasyBase {
    name: string;
    targetId?: string;
    targetType?: TargetTypeEnum;
    value?: string;
}
