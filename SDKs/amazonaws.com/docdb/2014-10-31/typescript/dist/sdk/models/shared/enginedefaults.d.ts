import { SpeakeasyBase } from "../../../internal/utils";
import { Parameter } from "./parameter";
/**
 * Contains the result of a successful invocation of the <code>DescribeEngineDefaultClusterParameters</code> operation.
**/
export declare class EngineDefaults extends SpeakeasyBase {
    dbParameterGroupFamily?: string;
    marker?: string;
    parameters?: Parameter[];
}
