import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ApiModelsPermissionDataRequiredEnum {
    Yes = "Yes",
    No = "No",
    Optional = "Optional"
}
export declare class ApiModelsPermission extends SpeakeasyBase {
    dataDescription?: string;
    dataRequired: ApiModelsPermissionDataRequiredEnum;
    description?: string;
    id?: number;
    name: string;
}
