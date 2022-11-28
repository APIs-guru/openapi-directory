import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProjectionTypeEnum } from "./projectiontypeenum";



// Projection
/** 
 * Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
**/
export class Projection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NonKeyAttributes" })
  nonKeyAttributes?: string[];

  @SpeakeasyMetadata({ data: "json, name=ProjectionType" })
  projectionType?: ProjectionTypeEnum;
}
