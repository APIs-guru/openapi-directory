import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ApiCachingBehaviorEnum } from "./apicachingbehaviorenum";
import { ApiCacheStatusEnum } from "./apicachestatusenum";
import { ApiCacheTypeEnum } from "./apicachetypeenum";
/**
 * The <code>ApiCache</code> object.
**/
export declare class ApiCache extends SpeakeasyBase {
    apiCachingBehavior?: ApiCachingBehaviorEnum;
    atRestEncryptionEnabled?: boolean;
    status?: ApiCacheStatusEnum;
    transitEncryptionEnabled?: boolean;
    ttl?: number;
    type?: ApiCacheTypeEnum;
}
