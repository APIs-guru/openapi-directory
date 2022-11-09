import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TypedLinkSpecifier } from "./typedlinkspecifier";


export class ListOutgoingTypedLinksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=TypedLinkSpecifiers", elemType: shared.TypedLinkSpecifier })
  typedLinkSpecifiers?: TypedLinkSpecifier[];
}
