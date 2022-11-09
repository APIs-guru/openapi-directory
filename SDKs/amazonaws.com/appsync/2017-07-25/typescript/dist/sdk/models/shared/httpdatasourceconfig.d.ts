import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthorizationConfig } from "./authorizationconfig";
/**
 * Describes an HTTP data source configuration.
**/
export declare class HttpDataSourceConfig extends SpeakeasyBase {
    authorizationConfig?: AuthorizationConfig;
    endpoint?: string;
}
