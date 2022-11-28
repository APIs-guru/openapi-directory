import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateRoleAliasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=roleAlias" })
  roleAlias?: string;

  @SpeakeasyMetadata({ data: "json, name=roleAliasArn" })
  roleAliasArn?: string;
}
