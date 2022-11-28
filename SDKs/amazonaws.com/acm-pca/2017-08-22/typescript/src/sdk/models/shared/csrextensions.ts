import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyUsage } from "./keyusage";
import { AccessDescription } from "./accessdescription";



// CsrExtensions
/** 
 * Describes the certificate extensions to be added to the certificate signing request (CSR).
**/
export class CsrExtensions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KeyUsage" })
  keyUsage?: KeyUsage;

  @SpeakeasyMetadata({ data: "json, name=SubjectInformationAccess", elemType: AccessDescription })
  subjectInformationAccess?: AccessDescription[];
}
