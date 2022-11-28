import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ApiModelsRoleUserChangeActionEnum {
    Grant = "Grant",
    Revoke = "Revoke"
}
export declare class ApiModelsRoleUserChange extends SpeakeasyBase {
    action: ApiModelsRoleUserChangeActionEnum;
    id: number;
}
