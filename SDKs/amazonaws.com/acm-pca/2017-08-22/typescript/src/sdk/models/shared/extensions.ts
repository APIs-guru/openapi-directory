import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyInformation } from "./policyinformation";
import { ExtendedKeyUsage } from "./extendedkeyusage";
import { KeyUsage } from "./keyusage";
import { GeneralName } from "./generalname";



// Extensions
/** 
 * Contains X.509 extension information for a certificate.
**/
export class Extensions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificatePolicies", elemType: PolicyInformation })
  certificatePolicies?: PolicyInformation[];

  @SpeakeasyMetadata({ data: "json, name=ExtendedKeyUsage", elemType: ExtendedKeyUsage })
  extendedKeyUsage?: ExtendedKeyUsage[];

  @SpeakeasyMetadata({ data: "json, name=KeyUsage" })
  keyUsage?: KeyUsage;

  @SpeakeasyMetadata({ data: "json, name=SubjectAlternativeNames", elemType: GeneralName })
  subjectAlternativeNames?: GeneralName[];
}
