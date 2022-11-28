import { SpeakeasyBase } from "../../../internal/utils";
import { Duration } from "./duration";
/**
 * An object that represents types of timeouts.
**/
export declare class HttpTimeout extends SpeakeasyBase {
    idle?: Duration;
    perRequest?: Duration;
}
