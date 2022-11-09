import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RoleAliasDescription
/** 
 * Role alias description.
**/
export class RoleAliasDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=credentialDurationSeconds" })
  credentialDurationSeconds?: number;

  @Metadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: Date;

  @Metadata({ data: "json, name=owner" })
  owner?: string;

  @Metadata({ data: "json, name=roleAlias" })
  roleAlias?: string;

  @Metadata({ data: "json, name=roleAliasArn" })
  roleAliasArn?: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;
}
