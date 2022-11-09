import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SubjectAlternativeNameMatchers } from "./subjectalternativenamematchers";


// SubjectAlternativeNames
/** 
 * An object that represents the subject alternative names secured by the certificate.
**/
export class SubjectAlternativeNames extends SpeakeasyBase {
  @Metadata({ data: "json, name=match" })
  match: SubjectAlternativeNameMatchers;
}
