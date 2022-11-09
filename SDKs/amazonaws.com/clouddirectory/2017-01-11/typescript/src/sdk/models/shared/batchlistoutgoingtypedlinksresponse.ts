import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TypedLinkSpecifier } from "./typedlinkspecifier";


// BatchListOutgoingTypedLinksResponse
/** 
 * Represents the output of a <a>ListOutgoingTypedLinks</a> response operation.
**/
export class BatchListOutgoingTypedLinksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=TypedLinkSpecifiers", elemType: shared.TypedLinkSpecifier })
  typedLinkSpecifiers?: TypedLinkSpecifier[];
}
