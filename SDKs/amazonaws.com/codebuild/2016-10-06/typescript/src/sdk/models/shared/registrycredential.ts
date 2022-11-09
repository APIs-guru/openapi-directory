import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CredentialProviderTypeEnum } from "./credentialprovidertypeenum";


// RegistryCredential
/** 
 * <p> Information about credentials that provide access to a private Docker registry. When this is set: </p> <ul> <li> <p> <code>imagePullCredentialsType</code> must be set to <code>SERVICE_ROLE</code>. </p> </li> <li> <p> images cannot be curated or an Amazon ECR image.</p> </li> </ul> <p> For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-private-registry.html">Private Registry with Secrets Manager Sample for CodeBuild</a>. </p>
**/
export class RegistryCredential extends SpeakeasyBase {
  @Metadata({ data: "json, name=credential" })
  credential: string;

  @Metadata({ data: "json, name=credentialProvider" })
  credentialProvider: CredentialProviderTypeEnum;
}
