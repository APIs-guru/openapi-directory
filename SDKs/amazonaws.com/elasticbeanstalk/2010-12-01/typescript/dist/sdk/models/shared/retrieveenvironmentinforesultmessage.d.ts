import { SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentInfoDescription } from "./environmentinfodescription";
/**
 * Result message containing a description of the requested environment info.
**/
export declare class RetrieveEnvironmentInfoResultMessage extends SpeakeasyBase {
    environmentInfo?: EnvironmentInfoDescription[];
}
