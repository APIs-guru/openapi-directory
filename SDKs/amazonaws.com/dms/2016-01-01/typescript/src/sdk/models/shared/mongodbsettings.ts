import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthMechanismValueEnum } from "./authmechanismvalueenum";
import { AuthTypeValueEnum } from "./authtypevalueenum";
import { NestingLevelValueEnum } from "./nestinglevelvalueenum";


// MongoDbSettings
/** 
 * Provides information that defines a MongoDB endpoint.
**/
export class MongoDbSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthMechanism" })
  authMechanism?: AuthMechanismValueEnum;

  @Metadata({ data: "json, name=AuthSource" })
  authSource?: string;

  @Metadata({ data: "json, name=AuthType" })
  authType?: AuthTypeValueEnum;

  @Metadata({ data: "json, name=DatabaseName" })
  databaseName?: string;

  @Metadata({ data: "json, name=DocsToInvestigate" })
  docsToInvestigate?: string;

  @Metadata({ data: "json, name=ExtractDocId" })
  extractDocId?: string;

  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=NestingLevel" })
  nestingLevel?: NestingLevelValueEnum;

  @Metadata({ data: "json, name=Password" })
  password?: string;

  @Metadata({ data: "json, name=Port" })
  port?: number;

  @Metadata({ data: "json, name=SecretsManagerAccessRoleArn" })
  secretsManagerAccessRoleArn?: string;

  @Metadata({ data: "json, name=SecretsManagerSecretId" })
  secretsManagerSecretId?: string;

  @Metadata({ data: "json, name=ServerName" })
  serverName?: string;

  @Metadata({ data: "json, name=Username" })
  username?: string;
}
