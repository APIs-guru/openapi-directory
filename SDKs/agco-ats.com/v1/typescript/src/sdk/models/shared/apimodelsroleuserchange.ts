import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ApiModelsRoleUserChangeActionEnum {
    Grant = "Grant",
    Revoke = "Revoke"
}


export class ApiModelsRoleUserChange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Action, form, name=Action;" })
  action: ApiModelsRoleUserChangeActionEnum;

  @SpeakeasyMetadata({ data: "json, name=Id, form, name=Id;" })
  id: number;
}
