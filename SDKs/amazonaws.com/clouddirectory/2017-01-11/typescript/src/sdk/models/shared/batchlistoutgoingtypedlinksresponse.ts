import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TypedLinkSpecifier } from "./typedlinkspecifier";



// BatchListOutgoingTypedLinksResponse
/** 
 * Represents the output of a <a>ListOutgoingTypedLinks</a> response operation.
**/
export class BatchListOutgoingTypedLinksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=TypedLinkSpecifiers", elemType: TypedLinkSpecifier })
  typedLinkSpecifiers?: TypedLinkSpecifier[];
}
