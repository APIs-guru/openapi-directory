import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CertificateValidationRecordStatusEnum } from "./certificatevalidationrecordstatusenum";


// CertificateValidationRecord
/** 
 * Describes a certificate CNAME record to add to your DNS. For more information, see <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_AssociateCustomDomain.html">AssociateCustomDomain</a>.
**/
export class CertificateValidationRecord extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Status" })
  status?: CertificateValidationRecordStatusEnum;

  @Metadata({ data: "json, name=Type" })
  type?: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
