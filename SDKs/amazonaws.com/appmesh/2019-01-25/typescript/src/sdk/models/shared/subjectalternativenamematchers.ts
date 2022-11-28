import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SubjectAlternativeNameMatchers
/** 
 * An object that represents the methods by which a subject alternative name on a peer Transport Layer Security (TLS) certificate can be matched.
**/
export class SubjectAlternativeNameMatchers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exact" })
  exact: string[];
}
