import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VaultNotificationConfig
/** 
 * Represents a vault's notification configuration.
**/
export class VaultNotificationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=Events" })
  events?: string[];

  @Metadata({ data: "json, name=SNSTopic" })
  snsTopic?: string;
}
