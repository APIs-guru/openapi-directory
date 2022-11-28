import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RoleAliasDescription } from "./rolealiasdescription";



export class DescribeRoleAliasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=roleAliasDescription" })
  roleAliasDescription?: RoleAliasDescription;
}
