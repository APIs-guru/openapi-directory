import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KmsGrantConstraints
/** 
 * Use this structure to propose allowing <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a> in the grant only when the operation request includes the specified <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">encryption context</a>. You can specify only one type of encryption context. An empty map is treated as not specified. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GrantConstraints.html">GrantConstraints</a>.
**/
export class KmsGrantConstraints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=encryptionContextEquals" })
  encryptionContextEquals?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=encryptionContextSubset" })
  encryptionContextSubset?: Map<string, string>;
}
