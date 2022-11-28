import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UnauthorizedCacheControlHeaderStrategyEnum } from "./unauthorizedcachecontrolheaderstrategyenum";



// MethodSetting
/** 
 * Specifies the method setting properties.
**/
export class MethodSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cacheDataEncrypted" })
  cacheDataEncrypted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cacheTtlInSeconds" })
  cacheTtlInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=cachingEnabled" })
  cachingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dataTraceEnabled" })
  dataTraceEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=loggingLevel" })
  loggingLevel?: string;

  @SpeakeasyMetadata({ data: "json, name=metricsEnabled" })
  metricsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=requireAuthorizationForCacheControl" })
  requireAuthorizationForCacheControl?: boolean;

  @SpeakeasyMetadata({ data: "json, name=throttlingBurstLimit" })
  throttlingBurstLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=throttlingRateLimit" })
  throttlingRateLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=unauthorizedCacheControlHeaderStrategy" })
  unauthorizedCacheControlHeaderStrategy?: UnauthorizedCacheControlHeaderStrategyEnum;
}
