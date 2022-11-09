import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateRoleAliasResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=roleAlias" })
  roleAlias?: string;

  @Metadata({ data: "json, name=roleAliasArn" })
  roleAliasArn?: string;
}
