import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Extensions } from "./extensions";
import { Asn1Subject } from "./asn1subject";


// ApiPassthrough
/** 
 * <p>Contains X.509 certificate information to be placed in an issued certificate. An <code>APIPassthrough</code> or <code>APICSRPassthrough</code> template variant must be selected, or else this parameter is ignored. </p> <p>If conflicting or duplicate certificate information is supplied from other sources, ACM Private CA applies <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/UsingTemplates.html#template-order-of-operations">order of operation rules</a> to determine what information is used.</p>
**/
export class ApiPassthrough extends SpeakeasyBase {
  @Metadata({ data: "json, name=Extensions" })
  extensions?: Extensions;

  @Metadata({ data: "json, name=Subject" })
  subject?: Asn1Subject;
}
