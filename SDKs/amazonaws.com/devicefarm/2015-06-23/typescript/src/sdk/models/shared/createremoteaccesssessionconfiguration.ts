import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BillingMethodEnum } from "./billingmethodenum";



// CreateRemoteAccessSessionConfiguration
/** 
 * Configuration settings for a remote access session, including billing method.
**/
export class CreateRemoteAccessSessionConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billingMethod" })
  billingMethod?: BillingMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=vpceConfigurationArns" })
  vpceConfigurationArns?: string[];
}
