import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UpdateActionTypeEnum } from "./updateactiontypeenum";
import { TypedLinkAttributeDefinition } from "./typedlinkattributedefinition";


// TypedLinkFacetAttributeUpdate
/** 
 * A typed link facet attribute update.
**/
export class TypedLinkFacetAttributeUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=Action" })
  action: UpdateActionTypeEnum;

  @Metadata({ data: "json, name=Attribute" })
  attribute: TypedLinkAttributeDefinition;
}
