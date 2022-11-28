import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateRoleAliasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=roleAlias" })
  roleAlias?: string;

  @SpeakeasyMetadata({ data: "json, name=roleAliasArn" })
  roleAliasArn?: string;
}
