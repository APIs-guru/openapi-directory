import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeleteBehaviorEnum } from "./deletebehaviorenum";
import { UpdateBehaviorEnum } from "./updatebehaviorenum";


// SchemaChangePolicy
/** 
 * A policy that specifies update and deletion behaviors for the crawler.
**/
export class SchemaChangePolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeleteBehavior" })
  deleteBehavior?: DeleteBehaviorEnum;

  @Metadata({ data: "json, name=UpdateBehavior" })
  updateBehavior?: UpdateBehaviorEnum;
}
