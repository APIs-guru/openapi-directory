import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ApiModelsTokenOptionsBearerActionEnum {
    None = "None",
    Reset = "Reset",
    Disable = "Disable"
}

export enum ApiModelsTokenOptionsMacActionEnum {
    None = "None",
    Reset = "Reset",
    Disable = "Disable"
}


export class ApiModelsTokenOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BearerAction, form, name=BearerAction;" })
  bearerAction?: ApiModelsTokenOptionsBearerActionEnum;

  @SpeakeasyMetadata({ data: "json, name=MACAction, form, name=MACAction;" })
  macAction?: ApiModelsTokenOptionsMacActionEnum;
}
