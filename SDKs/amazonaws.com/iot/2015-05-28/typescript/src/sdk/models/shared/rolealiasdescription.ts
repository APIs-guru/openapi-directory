import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RoleAliasDescription
/** 
 * Role alias description.
**/
export class RoleAliasDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=credentialDurationSeconds" })
  credentialDurationSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: string;

  @SpeakeasyMetadata({ data: "json, name=roleAlias" })
  roleAlias?: string;

  @SpeakeasyMetadata({ data: "json, name=roleAliasArn" })
  roleAliasArn?: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;
}
