import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectionTypeEnum } from "./projectiontypeenum";
/**
 * Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
**/
export declare class Projection extends SpeakeasyBase {
    nonKeyAttributes?: string[];
    projectionType?: ProjectionTypeEnum;
}
