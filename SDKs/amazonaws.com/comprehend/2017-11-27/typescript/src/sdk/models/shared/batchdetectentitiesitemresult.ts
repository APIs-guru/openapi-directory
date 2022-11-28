import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Entity } from "./entity";



// BatchDetectEntitiesItemResult
/** 
 * The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.
**/
export class BatchDetectEntitiesItemResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: Entity })
  entities?: Entity[];

  @SpeakeasyMetadata({ data: "json, name=Index" })
  index?: number;
}
