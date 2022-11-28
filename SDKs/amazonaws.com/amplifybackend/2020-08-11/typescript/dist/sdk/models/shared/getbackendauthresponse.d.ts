import { SpeakeasyBase } from "../../../internal/utils";
import { CreateBackendAuthResourceConfig } from "./createbackendauthresourceconfig";
export declare class GetBackendAuthResponse extends SpeakeasyBase {
    appId?: string;
    backendEnvironmentName?: string;
    error?: string;
    resourceConfig?: CreateBackendAuthResourceConfig;
    resourceName?: string;
}
