import { SpeakeasyBase } from "../../../internal/utils";
import { RuntimeConfiguration } from "./runtimeconfiguration";
/**
 * Represents the input for a request operation.
**/
export declare class UpdateRuntimeConfigurationInput extends SpeakeasyBase {
    fleetId: string;
    runtimeConfiguration: RuntimeConfiguration;
}
