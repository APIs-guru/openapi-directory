import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthMechanismValueEnum } from "./authmechanismvalueenum";
import { AuthTypeValueEnum } from "./authtypevalueenum";
import { NestingLevelValueEnum } from "./nestinglevelvalueenum";



// MongoDbSettings
/** 
 * Provides information that defines a MongoDB endpoint.
**/
export class MongoDbSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthMechanism" })
  authMechanism?: AuthMechanismValueEnum;

  @SpeakeasyMetadata({ data: "json, name=AuthSource" })
  authSource?: string;

  @SpeakeasyMetadata({ data: "json, name=AuthType" })
  authType?: AuthTypeValueEnum;

  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName?: string;

  @SpeakeasyMetadata({ data: "json, name=DocsToInvestigate" })
  docsToInvestigate?: string;

  @SpeakeasyMetadata({ data: "json, name=ExtractDocId" })
  extractDocId?: string;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=NestingLevel" })
  nestingLevel?: NestingLevelValueEnum;

  @SpeakeasyMetadata({ data: "json, name=Password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=Port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=SecretsManagerAccessRoleArn" })
  secretsManagerAccessRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SecretsManagerSecretId" })
  secretsManagerSecretId?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerName" })
  serverName?: string;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username?: string;
}
