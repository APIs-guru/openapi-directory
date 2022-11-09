import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ThrottleSettings } from "./throttlesettings";
/**
 * API stage name of the associated API stage in a usage plan.
**/
export declare class ApiStage extends SpeakeasyBase {
    apiId?: string;
    stage?: string;
    throttle?: Map<string, ThrottleSettings>;
}
