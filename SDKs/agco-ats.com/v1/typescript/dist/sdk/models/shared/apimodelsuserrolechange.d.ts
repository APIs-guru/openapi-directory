import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ApiModelsUserRoleChangeActionEnum {
    Grant = "Grant",
    Revoke = "Revoke"
}
export declare class ApiModelsUserRoleChange extends SpeakeasyBase {
    action: ApiModelsUserRoleChangeActionEnum;
    name: string;
}
