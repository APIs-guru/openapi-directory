import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListRoleAliasesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextMarker" })
  nextMarker?: string;

  @SpeakeasyMetadata({ data: "json, name=roleAliases" })
  roleAliases?: string[];
}
