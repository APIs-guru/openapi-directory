import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html"> Caching Content Based on Request Headers</a> in the <i>Amazon CloudFront Developer Guide</i>.
**/
export declare class CookieNames extends SpeakeasyBase {
    items?: string[];
    quantity: number;
}
