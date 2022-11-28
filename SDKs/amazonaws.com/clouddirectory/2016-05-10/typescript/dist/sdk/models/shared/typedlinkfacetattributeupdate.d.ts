import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateActionTypeEnum } from "./updateactiontypeenum";
import { TypedLinkAttributeDefinition } from "./typedlinkattributedefinition";
/**
 * A typed link facet attribute update.
**/
export declare class TypedLinkFacetAttributeUpdate extends SpeakeasyBase {
    action: UpdateActionTypeEnum;
    attribute: TypedLinkAttributeDefinition;
}
