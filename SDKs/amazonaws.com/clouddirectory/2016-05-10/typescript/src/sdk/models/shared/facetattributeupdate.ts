import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateActionTypeEnum } from "./updateactiontypeenum";
import { FacetAttribute } from "./facetattribute";



// FacetAttributeUpdate
/** 
 * A structure that contains information used to update an attribute.
**/
export class FacetAttributeUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Action" })
  action?: UpdateActionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Attribute" })
  attribute?: FacetAttribute;
}
