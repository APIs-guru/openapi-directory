import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CertificateValidationRecordStatusEnum } from "./certificatevalidationrecordstatusenum";



// CertificateValidationRecord
/** 
 * Describes a certificate CNAME record to add to your DNS. For more information, see <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_AssociateCustomDomain.html">AssociateCustomDomain</a>.
**/
export class CertificateValidationRecord extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: CertificateValidationRecordStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
