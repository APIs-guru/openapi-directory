import { SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentDescription } from "./environmentdescription";
/**
 * Result message containing a list of environment descriptions.
**/
export declare class EnvironmentDescriptionsMessage extends SpeakeasyBase {
    environments?: EnvironmentDescription[];
    nextToken?: string;
}
