import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TypedLinkSpecifier } from "./typedlinkspecifier";



export class ListIncomingTypedLinksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LinkSpecifiers", elemType: TypedLinkSpecifier })
  linkSpecifiers?: TypedLinkSpecifier[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
