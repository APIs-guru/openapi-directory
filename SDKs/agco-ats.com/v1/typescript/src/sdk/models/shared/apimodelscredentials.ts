import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ApiModelsCredentialsBearerActionEnum {
    None = "None",
    Reset = "Reset",
    Disable = "Disable"
}

export enum ApiModelsCredentialsMacActionEnum {
    None = "None",
    Reset = "Reset",
    Disable = "Disable"
}


export class ApiModelsCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BearerAction, form, name=BearerAction;" })
  bearerAction?: ApiModelsCredentialsBearerActionEnum;

  @SpeakeasyMetadata({ data: "json, name=MACAction, form, name=MACAction;" })
  macAction?: ApiModelsCredentialsMacActionEnum;

  @SpeakeasyMetadata({ data: "json, name=password, form, name=password;" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=username, form, name=username;" })
  username: string;
}
