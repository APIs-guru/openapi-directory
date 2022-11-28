import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeNameAndValue } from "./attributenameandvalue";
import { ObjectReference } from "./objectreference";
import { TypedLinkSchemaAndFacetName } from "./typedlinkschemaandfacetname";



// BatchAttachTypedLink
/** 
 * Attaches a typed link to a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>AttachTypedLink</a> and <a>BatchReadRequest$Operations</a>.
**/
export class BatchAttachTypedLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attributes", elemType: AttributeNameAndValue })
  attributes: AttributeNameAndValue[];

  @SpeakeasyMetadata({ data: "json, name=SourceObjectReference" })
  sourceObjectReference: ObjectReference;

  @SpeakeasyMetadata({ data: "json, name=TargetObjectReference" })
  targetObjectReference: ObjectReference;

  @SpeakeasyMetadata({ data: "json, name=TypedLinkFacet" })
  typedLinkFacet: TypedLinkSchemaAndFacetName;
}
