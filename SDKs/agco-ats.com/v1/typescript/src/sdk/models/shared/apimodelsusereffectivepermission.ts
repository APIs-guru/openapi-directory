import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiModelsUserEffectivePermission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PermissionId" })
  permissionId?: number;

  @SpeakeasyMetadata({ data: "json, name=PermissionName" })
  permissionName?: string;

  @SpeakeasyMetadata({ data: "json, name=UserID" })
  userId?: number;
}
