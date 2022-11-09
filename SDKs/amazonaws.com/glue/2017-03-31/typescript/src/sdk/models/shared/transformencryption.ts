import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MlUserDataEncryption } from "./mluserdataencryption";


// TransformEncryption
/** 
 * <p>The encryption-at-rest settings of the transform that apply to accessing user data. Machine learning transforms can access user data encrypted in Amazon S3 using KMS.</p> <p>Additionally, imported labels and trained transforms can now be encrypted using a customer provided KMS key.</p>
**/
export class TransformEncryption extends SpeakeasyBase {
  @Metadata({ data: "json, name=MlUserDataEncryption" })
  mlUserDataEncryption?: MlUserDataEncryption;

  @Metadata({ data: "json, name=TaskRunSecurityConfigurationName" })
  taskRunSecurityConfigurationName?: string;
}
