import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeNameAndValue } from "./attributenameandvalue";
import { ObjectReference } from "./objectreference";
import { TypedLinkSchemaAndFacetName } from "./typedlinkschemaandfacetname";
/**
 * Attaches a typed link to a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>AttachTypedLink</a> and <a>BatchReadRequest$Operations</a>.
**/
export declare class BatchAttachTypedLink extends SpeakeasyBase {
    attributes: AttributeNameAndValue[];
    sourceObjectReference: ObjectReference;
    targetObjectReference: ObjectReference;
    typedLinkFacet: TypedLinkSchemaAndFacetName;
}
