import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeNameAndValue } from "./attributenameandvalue";
import { ObjectReference } from "./objectreference";
import { ObjectReference } from "./objectreference";
import { TypedLinkSchemaAndFacetName } from "./typedlinkschemaandfacetname";


// BatchAttachTypedLink
/** 
 * Attaches a typed link to a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>AttachTypedLink</a> and <a>BatchReadRequest$Operations</a>.
**/
export class BatchAttachTypedLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=Attributes", elemType: shared.AttributeNameAndValue })
  attributes: AttributeNameAndValue[];

  @Metadata({ data: "json, name=SourceObjectReference" })
  sourceObjectReference: ObjectReference;

  @Metadata({ data: "json, name=TargetObjectReference" })
  targetObjectReference: ObjectReference;

  @Metadata({ data: "json, name=TypedLinkFacet" })
  typedLinkFacet: TypedLinkSchemaAndFacetName;
}
