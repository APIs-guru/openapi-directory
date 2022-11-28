import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CodeSigningSignature
/** 
 * Describes the signature for a file.
**/
export class CodeSigningSignature extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inlineDocument" })
  inlineDocument?: string;
}
