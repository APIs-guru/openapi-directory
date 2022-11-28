import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ApiModelsTokenOptionsBearerActionEnum {
    None = "None",
    Reset = "Reset",
    Disable = "Disable"
}
export declare enum ApiModelsTokenOptionsMacActionEnum {
    None = "None",
    Reset = "Reset",
    Disable = "Disable"
}
export declare class ApiModelsTokenOptions extends SpeakeasyBase {
    bearerAction?: ApiModelsTokenOptionsBearerActionEnum;
    macAction?: ApiModelsTokenOptionsMacActionEnum;
}
