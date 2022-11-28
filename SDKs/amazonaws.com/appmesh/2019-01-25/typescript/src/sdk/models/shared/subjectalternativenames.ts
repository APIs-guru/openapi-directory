import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubjectAlternativeNameMatchers } from "./subjectalternativenamematchers";



// SubjectAlternativeNames
/** 
 * An object that represents the subject alternative names secured by the certificate.
**/
export class SubjectAlternativeNames extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=match" })
  match: SubjectAlternativeNameMatchers;
}
