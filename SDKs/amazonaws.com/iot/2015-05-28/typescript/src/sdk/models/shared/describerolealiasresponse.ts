import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RoleAliasDescription } from "./rolealiasdescription";


export class DescribeRoleAliasResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=roleAliasDescription" })
  roleAliasDescription?: RoleAliasDescription;
}
