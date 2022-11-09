import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { KeyUsage } from "./keyusage";
import { AccessDescription } from "./accessdescription";


// CsrExtensions
/** 
 * Describes the certificate extensions to be added to the certificate signing request (CSR).
**/
export class CsrExtensions extends SpeakeasyBase {
  @Metadata({ data: "json, name=KeyUsage" })
  keyUsage?: KeyUsage;

  @Metadata({ data: "json, name=SubjectInformationAccess", elemType: shared.AccessDescription })
  subjectInformationAccess?: AccessDescription[];
}
