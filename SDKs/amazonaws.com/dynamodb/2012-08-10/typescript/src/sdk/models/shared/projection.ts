import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProjectionTypeEnum } from "./projectiontypeenum";


// Projection
/** 
 * Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
**/
export class Projection extends SpeakeasyBase {
  @Metadata({ data: "json, name=NonKeyAttributes" })
  nonKeyAttributes?: string[];

  @Metadata({ data: "json, name=ProjectionType" })
  projectionType?: ProjectionTypeEnum;
}
