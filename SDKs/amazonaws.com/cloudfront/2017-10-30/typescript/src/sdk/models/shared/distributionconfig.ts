import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Aliases } from "./aliases";
import { CacheBehaviors } from "./cachebehaviors";
import { CustomErrorResponses } from "./customerrorresponses";
import { DefaultCacheBehavior } from "./defaultcachebehavior";
import { HttpVersionEnum } from "./httpversionenum";
import { LoggingConfig } from "./loggingconfig";
import { Origins } from "./origins";
import { PriceClassEnum } from "./priceclassenum";
import { Restrictions } from "./restrictions";
import { ViewerCertificate } from "./viewercertificate";



// DistributionConfig
/** 
 * A distribution configuration.
**/
export class DistributionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  aliases?: Aliases;

  @SpeakeasyMetadata()
  cacheBehaviors?: CacheBehaviors;

  @SpeakeasyMetadata()
  callerReference: string;

  @SpeakeasyMetadata()
  comment: string;

  @SpeakeasyMetadata()
  customErrorResponses?: CustomErrorResponses;

  @SpeakeasyMetadata()
  defaultCacheBehavior: DefaultCacheBehavior;

  @SpeakeasyMetadata()
  defaultRootObject?: string;

  @SpeakeasyMetadata()
  enabled: boolean;

  @SpeakeasyMetadata()
  httpVersion?: HttpVersionEnum;

  @SpeakeasyMetadata()
  isIpv6Enabled?: boolean;

  @SpeakeasyMetadata()
  logging?: LoggingConfig;

  @SpeakeasyMetadata()
  origins: Origins;

  @SpeakeasyMetadata()
  priceClass?: PriceClassEnum;

  @SpeakeasyMetadata()
  restrictions?: Restrictions;

  @SpeakeasyMetadata()
  viewerCertificate?: ViewerCertificate;

  @SpeakeasyMetadata()
  webAclId?: string;
}
