import { SpeakeasyBase } from "../../../internal/utils/utils";
import { UnauthorizedCacheControlHeaderStrategyEnum } from "./unauthorizedcachecontrolheaderstrategyenum";
/**
 * Specifies the method setting properties.
**/
export declare class MethodSetting extends SpeakeasyBase {
    cacheDataEncrypted?: boolean;
    cacheTtlInSeconds?: number;
    cachingEnabled?: boolean;
    dataTraceEnabled?: boolean;
    loggingLevel?: string;
    metricsEnabled?: boolean;
    requireAuthorizationForCacheControl?: boolean;
    throttlingBurstLimit?: number;
    throttlingRateLimit?: number;
    unauthorizedCacheControlHeaderStrategy?: UnauthorizedCacheControlHeaderStrategyEnum;
}
