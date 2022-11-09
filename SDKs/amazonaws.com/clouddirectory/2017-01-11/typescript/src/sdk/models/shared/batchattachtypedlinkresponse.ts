import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TypedLinkSpecifier } from "./typedlinkspecifier";


// BatchAttachTypedLinkResponse
/** 
 * Represents the output of a <a>AttachTypedLink</a> response operation.
**/
export class BatchAttachTypedLinkResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=TypedLinkSpecifier" })
  typedLinkSpecifier?: TypedLinkSpecifier;
}
