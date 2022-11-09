import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ApiModelsCredentialsBearerActionEnum {
    None = "None"
,    Reset = "Reset"
,    Disable = "Disable"
}

export enum ApiModelsCredentialsMacActionEnum {
    None = "None"
,    Reset = "Reset"
,    Disable = "Disable"
}


export class ApiModelsCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=BearerAction, form, name=BearerAction;" })
  bearerAction?: ApiModelsCredentialsBearerActionEnum;

  @Metadata({ data: "json, name=MACAction, form, name=MACAction;" })
  macAction?: ApiModelsCredentialsMacActionEnum;

  @Metadata({ data: "json, name=password, form, name=password;" })
  password: string;

  @Metadata({ data: "json, name=username, form, name=username;" })
  username: string;
}
