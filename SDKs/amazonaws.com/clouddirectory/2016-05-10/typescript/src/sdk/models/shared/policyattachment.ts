import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PolicyAttachment
/** 
 * Contains the <code>PolicyType</code>, <code>PolicyId</code>, and the <code>ObjectIdentifier</code> to which it is attached. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_key_concepts.html#policies">Policies</a>.
**/
export class PolicyAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ObjectIdentifier" })
  objectIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyId" })
  policyId?: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyType" })
  policyType?: string;
}
