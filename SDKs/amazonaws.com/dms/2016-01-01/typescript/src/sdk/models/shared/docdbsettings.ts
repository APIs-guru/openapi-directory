import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestingLevelValueEnum } from "./nestinglevelvalueenum";



// DocDbSettings
/** 
 * Provides information that defines a DocumentDB endpoint.
**/
export class DocDbSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName?: string;

  @SpeakeasyMetadata({ data: "json, name=DocsToInvestigate" })
  docsToInvestigate?: number;

  @SpeakeasyMetadata({ data: "json, name=ExtractDocId" })
  extractDocId?: boolean;

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
