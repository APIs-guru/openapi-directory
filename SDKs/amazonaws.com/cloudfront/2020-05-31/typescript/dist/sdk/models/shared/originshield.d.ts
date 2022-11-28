import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>CloudFront Origin Shield.</p> <p>Using Origin Shield can help reduce the load on your origin. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html">Using Origin Shield</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
**/
export declare class OriginShield extends SpeakeasyBase {
    enabled: boolean;
    originShieldRegion?: string;
}
