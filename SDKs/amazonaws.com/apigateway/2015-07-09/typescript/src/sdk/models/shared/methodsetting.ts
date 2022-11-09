import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UnauthorizedCacheControlHeaderStrategyEnum } from "./unauthorizedcachecontrolheaderstrategyenum";


// MethodSetting
/** 
 * Specifies the method setting properties.
**/
export class MethodSetting extends SpeakeasyBase {
  @Metadata({ data: "json, name=cacheDataEncrypted" })
  cacheDataEncrypted?: boolean;

  @Metadata({ data: "json, name=cacheTtlInSeconds" })
  cacheTtlInSeconds?: number;

  @Metadata({ data: "json, name=cachingEnabled" })
  cachingEnabled?: boolean;

  @Metadata({ data: "json, name=dataTraceEnabled" })
  dataTraceEnabled?: boolean;

  @Metadata({ data: "json, name=loggingLevel" })
  loggingLevel?: string;

  @Metadata({ data: "json, name=metricsEnabled" })
  metricsEnabled?: boolean;

  @Metadata({ data: "json, name=requireAuthorizationForCacheControl" })
  requireAuthorizationForCacheControl?: boolean;

  @Metadata({ data: "json, name=throttlingBurstLimit" })
  throttlingBurstLimit?: number;

  @Metadata({ data: "json, name=throttlingRateLimit" })
  throttlingRateLimit?: number;

  @Metadata({ data: "json, name=unauthorizedCacheControlHeaderStrategy" })
  unauthorizedCacheControlHeaderStrategy?: UnauthorizedCacheControlHeaderStrategyEnum;
}
