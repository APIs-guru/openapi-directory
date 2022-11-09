import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CodeSigningSignature
/** 
 * Describes the signature for a file.
**/
export class CodeSigningSignature extends SpeakeasyBase {
  @Metadata({ data: "json, name=inlineDocument" })
  inlineDocument?: string;
}
