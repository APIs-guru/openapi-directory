import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ApiModelsTokenOptionsBearerActionEnum {
    None = "None"
,    Reset = "Reset"
,    Disable = "Disable"
}

export enum ApiModelsTokenOptionsMacActionEnum {
    None = "None"
,    Reset = "Reset"
,    Disable = "Disable"
}


export class ApiModelsTokenOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=BearerAction, form, name=BearerAction;" })
  bearerAction?: ApiModelsTokenOptionsBearerActionEnum;

  @Metadata({ data: "json, name=MACAction, form, name=MACAction;" })
  macAction?: ApiModelsTokenOptionsMacActionEnum;
}
