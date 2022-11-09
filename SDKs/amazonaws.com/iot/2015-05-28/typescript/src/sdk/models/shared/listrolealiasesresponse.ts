import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListRoleAliasesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextMarker" })
  nextMarker?: string;

  @Metadata({ data: "json, name=roleAliases" })
  roleAliases?: string[];
}
