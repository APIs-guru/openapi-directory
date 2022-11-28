import { SpeakeasyBase } from "../../../internal/utils";
import { BillingMethodEnum } from "./billingmethodenum";
/**
 * Configuration settings for a remote access session, including billing method.
**/
export declare class CreateRemoteAccessSessionConfiguration extends SpeakeasyBase {
    billingMethod?: BillingMethodEnum;
    vpceConfigurationArns?: string[];
}
