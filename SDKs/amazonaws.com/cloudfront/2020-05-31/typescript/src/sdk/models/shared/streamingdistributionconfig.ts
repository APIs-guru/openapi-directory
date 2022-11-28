import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Aliases } from "./aliases";
import { StreamingLoggingConfig } from "./streamingloggingconfig";
import { PriceClassEnum } from "./priceclassenum";
import { S3Origin } from "./s3origin";
import { TrustedSigners } from "./trustedsigners";



// StreamingDistributionConfig
/** 
 * The RTMP distribution's configuration information.
**/
export class StreamingDistributionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  aliases?: Aliases;

  @SpeakeasyMetadata()
  callerReference: string;

  @SpeakeasyMetadata()
  comment: string;

  @SpeakeasyMetadata()
  enabled: boolean;

  @SpeakeasyMetadata()
  logging?: StreamingLoggingConfig;

  @SpeakeasyMetadata()
  priceClass?: PriceClassEnum;

  @SpeakeasyMetadata()
  s3Origin: S3Origin;

  @SpeakeasyMetadata()
  trustedSigners: TrustedSigners;
}
