import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Aliases } from "./aliases";
import { CacheBehaviors } from "./cachebehaviors";
import { CustomErrorResponses } from "./customerrorresponses";
import { DefaultCacheBehavior } from "./defaultcachebehavior";
import { HttpVersionEnum } from "./httpversionenum";
import { Origins } from "./origins";
import { PriceClassEnum } from "./priceclassenum";
import { Restrictions } from "./restrictions";
import { ViewerCertificate } from "./viewercertificate";



// DistributionSummary
/** 
 * A summary of the information about a CloudFront distribution.
**/
export class DistributionSummary extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn: string;

  @SpeakeasyMetadata()
  aliases: Aliases;

  @SpeakeasyMetadata()
  cacheBehaviors: CacheBehaviors;

  @SpeakeasyMetadata()
  comment: string;

  @SpeakeasyMetadata()
  customErrorResponses: CustomErrorResponses;

  @SpeakeasyMetadata()
  defaultCacheBehavior: DefaultCacheBehavior;

  @SpeakeasyMetadata()
  domainName: string;

  @SpeakeasyMetadata()
  enabled: boolean;

  @SpeakeasyMetadata()
  httpVersion: HttpVersionEnum;

  @SpeakeasyMetadata()
  id: string;

  @SpeakeasyMetadata()
  isIpv6Enabled: boolean;

  @SpeakeasyMetadata()
  lastModifiedTime: Date;

  @SpeakeasyMetadata()
  origins: Origins;

  @SpeakeasyMetadata()
  priceClass: PriceClassEnum;

  @SpeakeasyMetadata()
  restrictions: Restrictions;

  @SpeakeasyMetadata()
  status: string;

  @SpeakeasyMetadata()
  viewerCertificate: ViewerCertificate;

  @SpeakeasyMetadata()
  webAclId: string;
}
