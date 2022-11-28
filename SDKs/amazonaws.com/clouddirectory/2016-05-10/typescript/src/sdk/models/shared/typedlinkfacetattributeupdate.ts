import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateActionTypeEnum } from "./updateactiontypeenum";
import { TypedLinkAttributeDefinition } from "./typedlinkattributedefinition";



// TypedLinkFacetAttributeUpdate
/** 
 * A typed link facet attribute update.
**/
export class TypedLinkFacetAttributeUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Action" })
  action: UpdateActionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Attribute" })
  attribute: TypedLinkAttributeDefinition;
}
