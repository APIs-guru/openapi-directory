import { SpeakeasyBase } from "../../../internal/utils";
import { Aliases } from "./aliases";
import { CacheBehaviors } from "./cachebehaviors";
import { CustomErrorResponses } from "./customerrorresponses";
import { DefaultCacheBehavior } from "./defaultcachebehavior";
import { HttpVersionEnum } from "./httpversionenum";
import { Origins } from "./origins";
import { PriceClassEnum } from "./priceclassenum";
import { Restrictions } from "./restrictions";
import { ViewerCertificate } from "./viewercertificate";
/**
 * A summary of the information about a CloudFront distribution.
**/
export declare class DistributionSummary extends SpeakeasyBase {
    arn: string;
    aliases: Aliases;
    cacheBehaviors: CacheBehaviors;
    comment: string;
    customErrorResponses: CustomErrorResponses;
    defaultCacheBehavior: DefaultCacheBehavior;
    domainName: string;
    enabled: boolean;
    httpVersion: HttpVersionEnum;
    id: string;
    isIpv6Enabled: boolean;
    lastModifiedTime: Date;
    origins: Origins;
    priceClass: PriceClassEnum;
    restrictions: Restrictions;
    status: string;
    viewerCertificate: ViewerCertificate;
    webAclId: string;
}
