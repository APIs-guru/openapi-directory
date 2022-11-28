import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TypedLinkSpecifier } from "./typedlinkspecifier";



// BatchAttachTypedLinkResponse
/** 
 * Represents the output of a <a>AttachTypedLink</a> response operation.
**/
export class BatchAttachTypedLinkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TypedLinkSpecifier" })
  typedLinkSpecifier?: TypedLinkSpecifier;
}
