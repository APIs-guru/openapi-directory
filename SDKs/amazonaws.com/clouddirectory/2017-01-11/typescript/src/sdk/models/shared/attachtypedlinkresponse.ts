import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TypedLinkSpecifier } from "./typedlinkspecifier";


export class AttachTypedLinkResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=TypedLinkSpecifier" })
  typedLinkSpecifier?: TypedLinkSpecifier;
}
