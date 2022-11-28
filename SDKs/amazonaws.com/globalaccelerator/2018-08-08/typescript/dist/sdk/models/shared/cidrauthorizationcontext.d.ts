import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Provides authorization for Amazon to bring a specific IP address range to a specific AWS account using bring your own IP addresses (BYOIP). </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
**/
export declare class CidrAuthorizationContext extends SpeakeasyBase {
    message: string;
    signature: string;
}
