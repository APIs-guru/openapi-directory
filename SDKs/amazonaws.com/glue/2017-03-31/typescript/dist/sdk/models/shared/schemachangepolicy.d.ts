import { SpeakeasyBase } from "../../../internal/utils";
import { DeleteBehaviorEnum } from "./deletebehaviorenum";
import { UpdateBehaviorEnum } from "./updatebehaviorenum";
/**
 * A policy that specifies update and deletion behaviors for the crawler.
**/
export declare class SchemaChangePolicy extends SpeakeasyBase {
    deleteBehavior?: DeleteBehaviorEnum;
    updateBehavior?: UpdateBehaviorEnum;
}
