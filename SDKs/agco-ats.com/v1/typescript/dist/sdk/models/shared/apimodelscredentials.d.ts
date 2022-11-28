import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ApiModelsCredentialsBearerActionEnum {
    None = "None",
    Reset = "Reset",
    Disable = "Disable"
}
export declare enum ApiModelsCredentialsMacActionEnum {
    None = "None",
    Reset = "Reset",
    Disable = "Disable"
}
export declare class ApiModelsCredentials extends SpeakeasyBase {
    bearerAction?: ApiModelsCredentialsBearerActionEnum;
    macAction?: ApiModelsCredentialsMacActionEnum;
    password: string;
    username: string;
}
