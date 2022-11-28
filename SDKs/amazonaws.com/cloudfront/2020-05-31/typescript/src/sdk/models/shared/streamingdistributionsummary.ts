import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Aliases } from "./aliases";
import { PriceClassEnum } from "./priceclassenum";
import { S3Origin } from "./s3origin";
import { TrustedSigners } from "./trustedsigners";



// StreamingDistributionSummary
/** 
 *  A summary of the information for a CloudFront streaming distribution.
**/
export class StreamingDistributionSummary extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn: string;

  @SpeakeasyMetadata()
  aliases: Aliases;

  @SpeakeasyMetadata()
  comment: string;

  @SpeakeasyMetadata()
  domainName: string;

  @SpeakeasyMetadata()
  enabled: boolean;

  @SpeakeasyMetadata()
  id: string;

  @SpeakeasyMetadata()
  lastModifiedTime: Date;

  @SpeakeasyMetadata()
  priceClass: PriceClassEnum;

  @SpeakeasyMetadata()
  s3Origin: S3Origin;

  @SpeakeasyMetadata()
  status: string;

  @SpeakeasyMetadata()
  trustedSigners: TrustedSigners;
}
