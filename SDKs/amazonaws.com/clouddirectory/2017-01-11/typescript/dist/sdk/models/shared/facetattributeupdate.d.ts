import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateActionTypeEnum } from "./updateactiontypeenum";
import { FacetAttribute } from "./facetattribute";
/**
 * A structure that contains information used to update an attribute.
**/
export declare class FacetAttributeUpdate extends SpeakeasyBase {
    action?: UpdateActionTypeEnum;
    attribute?: FacetAttribute;
}
