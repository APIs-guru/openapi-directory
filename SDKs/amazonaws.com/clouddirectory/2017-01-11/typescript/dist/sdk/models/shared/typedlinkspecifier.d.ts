import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeNameAndValue } from "./attributenameandvalue";
import { ObjectReference } from "./objectreference";
import { TypedLinkSchemaAndFacetName } from "./typedlinkschemaandfacetname";
/**
 * Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
**/
export declare class TypedLinkSpecifier extends SpeakeasyBase {
    identityAttributeValues: AttributeNameAndValue[];
    sourceObjectReference: ObjectReference;
    targetObjectReference: ObjectReference;
    typedLinkFacet: TypedLinkSchemaAndFacetName;
}
