import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestingLevelValueEnum } from "./nestinglevelvalueenum";


// DocDbSettings
/** 
 * Provides information that defines a DocumentDB endpoint.
**/
export class DocDbSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=DatabaseName" })
  databaseName?: string;

  @Metadata({ data: "json, name=DocsToInvestigate" })
  docsToInvestigate?: number;

  @Metadata({ data: "json, name=ExtractDocId" })
  extractDocId?: boolean;

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
