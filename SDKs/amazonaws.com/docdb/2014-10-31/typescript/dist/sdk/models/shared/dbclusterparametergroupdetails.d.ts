import { SpeakeasyBase } from "../../../internal/utils";
import { Parameter } from "./parameter";
/**
 * Represents the output of <a>DBClusterParameterGroup</a>.
**/
export declare class DbClusterParameterGroupDetails extends SpeakeasyBase {
    marker?: string;
    parameters?: Parameter[];
}
