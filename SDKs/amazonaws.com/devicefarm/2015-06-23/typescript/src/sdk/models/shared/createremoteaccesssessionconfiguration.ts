import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BillingMethodEnum } from "./billingmethodenum";


// CreateRemoteAccessSessionConfiguration
/** 
 * Configuration settings for a remote access session, including billing method.
**/
export class CreateRemoteAccessSessionConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=billingMethod" })
  billingMethod?: BillingMethodEnum;

  @Metadata({ data: "json, name=vpceConfigurationArns" })
  vpceConfigurationArns?: string[];
}
