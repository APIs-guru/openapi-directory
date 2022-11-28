import { SpeakeasyBase } from "../../../internal/utils";
import { Aliases } from "./aliases";
import { PriceClassEnum } from "./priceclassenum";
import { S3Origin } from "./s3origin";
import { TrustedSigners } from "./trustedsigners";
/**
 *  A summary of the information for an Amazon CloudFront streaming distribution.
**/
export declare class StreamingDistributionSummary extends SpeakeasyBase {
    arn: string;
    aliases: Aliases;
    comment: string;
    domainName: string;
    enabled: boolean;
    id: string;
    lastModifiedTime: Date;
    priceClass: PriceClassEnum;
    s3Origin: S3Origin;
    status: string;
    trustedSigners: TrustedSigners;
}
