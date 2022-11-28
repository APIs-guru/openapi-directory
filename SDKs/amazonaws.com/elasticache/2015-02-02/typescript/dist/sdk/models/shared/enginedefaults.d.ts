import { SpeakeasyBase } from "../../../internal/utils";
import { CacheNodeTypeSpecificParameter } from "./cachenodetypespecificparameter";
import { Parameter } from "./parameter";
/**
 * Represents the output of a <code>DescribeEngineDefaultParameters</code> operation.
**/
export declare class EngineDefaults extends SpeakeasyBase {
    cacheNodeTypeSpecificParameters?: CacheNodeTypeSpecificParameter[];
    cacheParameterGroupFamily?: string;
    marker?: string;
    parameters?: Parameter[];
}
