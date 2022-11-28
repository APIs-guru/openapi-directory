import { SpeakeasyBase } from "../../../internal/utils";
import { Aliases } from "./aliases";
import { StreamingLoggingConfig } from "./streamingloggingconfig";
import { PriceClassEnum } from "./priceclassenum";
import { S3Origin } from "./s3origin";
import { TrustedSigners } from "./trustedsigners";
/**
 * The RTMP distribution's configuration information.
**/
export declare class StreamingDistributionConfig extends SpeakeasyBase {
    aliases?: Aliases;
    callerReference: string;
    comment: string;
    enabled: boolean;
    logging?: StreamingLoggingConfig;
    priceClass?: PriceClassEnum;
    s3Origin: S3Origin;
    trustedSigners: TrustedSigners;
}
