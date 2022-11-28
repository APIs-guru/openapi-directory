import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateGlobalSecondaryIndexAction } from "./createglobalsecondaryindexaction";
import { DeleteGlobalSecondaryIndexAction } from "./deleteglobalsecondaryindexaction";
import { UpdateGlobalSecondaryIndexAction } from "./updateglobalsecondaryindexaction";



// GlobalSecondaryIndexUpdate
/** 
 * <p>Represents one of the following:</p> <ul> <li> <p>A new global secondary index to be added to an existing table.</p> </li> <li> <p>New provisioned throughput parameters for an existing global secondary index.</p> </li> <li> <p>An existing global secondary index to be removed from an existing table.</p> </li> </ul>
**/
export class GlobalSecondaryIndexUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Create" })
  create?: CreateGlobalSecondaryIndexAction;

  @SpeakeasyMetadata({ data: "json, name=Delete" })
  delete?: DeleteGlobalSecondaryIndexAction;

  @SpeakeasyMetadata({ data: "json, name=Update" })
  update?: UpdateGlobalSecondaryIndexAction;
}
