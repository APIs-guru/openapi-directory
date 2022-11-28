import { SpeakeasyBase } from "../../../internal/utils";
import { CacheNodeTypeSpecificParameter } from "./cachenodetypespecificparameter";
import { Parameter } from "./parameter";
/**
 * Represents the output of a <code>DescribeCacheParameters</code> operation.
**/
export declare class CacheParameterGroupDetails extends SpeakeasyBase {
    cacheNodeTypeSpecificParameters?: CacheNodeTypeSpecificParameter[];
    marker?: string;
    parameters?: Parameter[];
}
