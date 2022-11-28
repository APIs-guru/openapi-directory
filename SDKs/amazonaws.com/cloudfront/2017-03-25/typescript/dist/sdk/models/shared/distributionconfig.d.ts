import { SpeakeasyBase } from "../../../internal/utils";
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
/**
 * A distribution configuration.
**/
export declare class DistributionConfig extends SpeakeasyBase {
    aliases?: Aliases;
    cacheBehaviors?: CacheBehaviors;
    callerReference: string;
    comment: string;
    customErrorResponses?: CustomErrorResponses;
    defaultCacheBehavior: DefaultCacheBehavior;
    defaultRootObject?: string;
    enabled: boolean;
    httpVersion?: HttpVersionEnum;
    isIpv6Enabled?: boolean;
    logging?: LoggingConfig;
    origins: Origins;
    priceClass?: PriceClassEnum;
    restrictions?: Restrictions;
    viewerCertificate?: ViewerCertificate;
    webAclId?: string;
}
