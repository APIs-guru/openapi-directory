import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ValidityPeriodTypeEnum } from "./validityperiodtypeenum";



// Validity
/** 
 * <p>Validity specifies the period of time during which a certificate is valid. Validity can be expressed as an explicit date and time when the validity of a certificate starts or expires, or as a span of time after issuance, stated in days, months, or years. For more information, see <a href="https://tools.ietf.org/html/rfc5280#section-4.1.2.5">Validity</a> in RFC 5280.</p> <p>ACM Private CA API consumes the <code>Validity</code> data type differently in two distinct parameters of the <code>IssueCertificate</code> action. The required parameter <code>IssueCertificate</code>:<code>Validity</code> specifies the end of a certificate's validity period. The optional parameter <code>IssueCertificate</code>:<code>ValidityNotBefore</code> specifies a customized starting time for the validity period.</p>
**/
export class Validity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: ValidityPeriodTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value: number;
}
