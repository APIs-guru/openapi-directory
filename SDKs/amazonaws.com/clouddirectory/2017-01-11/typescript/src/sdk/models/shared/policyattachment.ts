import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PolicyAttachment
/** 
 * Contains the <code>PolicyType</code>, <code>PolicyId</code>, and the <code>ObjectIdentifier</code> to which it is attached. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.
**/
export class PolicyAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ObjectIdentifier" })
  objectIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyId" })
  policyId?: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyType" })
  policyType?: string;
}
