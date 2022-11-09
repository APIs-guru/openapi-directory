import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WebhookAuthConfiguration
/** 
 * The authentication applied to incoming webhook trigger requests.
**/
export class WebhookAuthConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllowedIPRange" })
  allowedIpRange?: string;

  @Metadata({ data: "json, name=SecretToken" })
  secretToken?: string;
}
