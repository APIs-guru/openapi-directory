import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PolicyInformation } from "./policyinformation";
import { ExtendedKeyUsage } from "./extendedkeyusage";
import { KeyUsage } from "./keyusage";
import { GeneralName } from "./generalname";


// Extensions
/** 
 * Contains X.509 extension information for a certificate.
**/
export class Extensions extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertificatePolicies", elemType: shared.PolicyInformation })
  certificatePolicies?: PolicyInformation[];

  @Metadata({ data: "json, name=ExtendedKeyUsage", elemType: shared.ExtendedKeyUsage })
  extendedKeyUsage?: ExtendedKeyUsage[];

  @Metadata({ data: "json, name=KeyUsage" })
  keyUsage?: KeyUsage;

  @Metadata({ data: "json, name=SubjectAlternativeNames", elemType: shared.GeneralName })
  subjectAlternativeNames?: GeneralName[];
}
