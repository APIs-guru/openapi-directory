import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WebhookAuthConfiguration
/** 
 * The authentication applied to incoming webhook trigger requests.
**/
export class WebhookAuthConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllowedIPRange" })
  allowedIpRange?: string;

  @SpeakeasyMetadata({ data: "json, name=SecretToken" })
  secretToken?: string;
}
