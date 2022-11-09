import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiModelsUserEffectivePermission extends SpeakeasyBase {
  @Metadata({ data: "json, name=PermissionId" })
  permissionId?: number;

  @Metadata({ data: "json, name=PermissionName" })
  permissionName?: string;

  @Metadata({ data: "json, name=UserID" })
  userId?: number;
}
