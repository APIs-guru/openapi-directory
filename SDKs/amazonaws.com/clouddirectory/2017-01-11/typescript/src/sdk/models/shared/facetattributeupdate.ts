import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UpdateActionTypeEnum } from "./updateactiontypeenum";
import { FacetAttribute } from "./facetattribute";


// FacetAttributeUpdate
/** 
 * A structure that contains information used to update an attribute.
**/
export class FacetAttributeUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=Action" })
  action?: UpdateActionTypeEnum;

  @Metadata({ data: "json, name=Attribute" })
  attribute?: FacetAttribute;
}
