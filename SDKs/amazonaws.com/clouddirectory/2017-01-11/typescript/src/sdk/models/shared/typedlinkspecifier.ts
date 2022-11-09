import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeNameAndValue } from "./attributenameandvalue";
import { ObjectReference } from "./objectreference";
import { ObjectReference } from "./objectreference";
import { TypedLinkSchemaAndFacetName } from "./typedlinkschemaandfacetname";


// TypedLinkSpecifier
/** 
 * Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
**/
export class TypedLinkSpecifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=IdentityAttributeValues", elemType: shared.AttributeNameAndValue })
  identityAttributeValues: AttributeNameAndValue[];

  @Metadata({ data: "json, name=SourceObjectReference" })
  sourceObjectReference: ObjectReference;

  @Metadata({ data: "json, name=TargetObjectReference" })
  targetObjectReference: ObjectReference;

  @Metadata({ data: "json, name=TypedLinkFacet" })
  typedLinkFacet: TypedLinkSchemaAndFacetName;
}
