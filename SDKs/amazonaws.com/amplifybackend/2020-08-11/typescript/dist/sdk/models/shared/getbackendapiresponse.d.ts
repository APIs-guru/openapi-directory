import { SpeakeasyBase } from "../../../internal/utils";
import { BackendApiResourceConfig } from "./backendapiresourceconfig";
export declare class GetBackendApiResponse extends SpeakeasyBase {
    appId?: string;
    backendEnvironmentName?: string;
    error?: string;
    resourceConfig?: BackendApiResourceConfig;
    resourceName?: string;
}
