import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TypedLinkSpecifier } from "./typedlinkspecifier";


// BatchListIncomingTypedLinksResponse
/** 
 * Represents the output of a <a>ListIncomingTypedLinks</a> response operation.
**/
export class BatchListIncomingTypedLinksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=LinkSpecifiers", elemType: shared.TypedLinkSpecifier })
  linkSpecifiers?: TypedLinkSpecifier[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
