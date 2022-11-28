import { SpeakeasyBase } from "../../../internal/utils";
import { CacheNodeTypeSpecificValue } from "./cachenodetypespecificvalue";
import { ChangeTypeEnum } from "./changetypeenum";
/**
 * A parameter that has a different value for each cache node type it is applied to. For example, in a Redis cluster, a <code>cache.m1.large</code> cache node type would have a larger <code>maxmemory</code> value than a <code>cache.m1.small</code> type.
**/
export declare class CacheNodeTypeSpecificParameter extends SpeakeasyBase {
    allowedValues?: string;
    cacheNodeTypeSpecificValues?: CacheNodeTypeSpecificValue[];
    changeType?: ChangeTypeEnum;
    dataType?: string;
    description?: string;
    isModifiable?: boolean;
    minimumEngineVersion?: string;
    parameterName?: string;
    source?: string;
}
