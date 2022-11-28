import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TypedLinkSpecifier } from "./typedlinkspecifier";



export class AttachTypedLinkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TypedLinkSpecifier" })
  typedLinkSpecifier?: TypedLinkSpecifier;
}
