import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ApiModelsUserRoleChangeActionEnum {
    Grant = "Grant",
    Revoke = "Revoke"
}


export class ApiModelsUserRoleChange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Action, form, name=Action;" })
  action: ApiModelsUserRoleChangeActionEnum;

  @SpeakeasyMetadata({ data: "json, name=Name, form, name=Name;" })
  name: string;
}
