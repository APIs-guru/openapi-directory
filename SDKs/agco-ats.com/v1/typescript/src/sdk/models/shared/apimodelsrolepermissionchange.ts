import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ApiModelsRolePermissionChangeActionEnum {
    Grant = "Grant",
    Revoke = "Revoke"
}


// ApiModelsRolePermissionChange
/** 
 * Change to the Permissions that a Role is given.
**/
export class ApiModelsRolePermissionChange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Action, form, name=Action;" })
  action: ApiModelsRolePermissionChangeActionEnum;

  @SpeakeasyMetadata({ data: "json, name=Permission, form, name=Permission;" })
  permission: string;
}
