import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Entity } from "./entity";


// BatchDetectEntitiesItemResult
/** 
 * The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.
**/
export class BatchDetectEntitiesItemResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.Entity })
  entities?: Entity[];

  @Metadata({ data: "json, name=Index" })
  index?: number;
}
