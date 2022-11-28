import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeleteBehaviorEnum } from "./deletebehaviorenum";
import { UpdateBehaviorEnum } from "./updatebehaviorenum";



// SchemaChangePolicy
/** 
 * A policy that specifies update and deletion behaviors for the crawler.
**/
export class SchemaChangePolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeleteBehavior" })
  deleteBehavior?: DeleteBehaviorEnum;

  @SpeakeasyMetadata({ data: "json, name=UpdateBehavior" })
  updateBehavior?: UpdateBehaviorEnum;
}
