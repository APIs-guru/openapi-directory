import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TypedLinkSpecifier } from "./typedlinkspecifier";



export class ListOutgoingTypedLinksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=TypedLinkSpecifiers", elemType: TypedLinkSpecifier })
  typedLinkSpecifiers?: TypedLinkSpecifier[];
}
