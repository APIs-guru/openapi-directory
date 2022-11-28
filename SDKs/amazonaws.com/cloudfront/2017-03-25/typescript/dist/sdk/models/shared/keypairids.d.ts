import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>A complex type that lists the active CloudFront key pairs, if any, that are associated with <code>AwsAccountNumber</code>. </p> <p>For more information, see <a>ActiveTrustedSigners</a>.</p>
**/
export declare class KeyPairIds extends SpeakeasyBase {
    items?: string[];
    quantity: number;
}
