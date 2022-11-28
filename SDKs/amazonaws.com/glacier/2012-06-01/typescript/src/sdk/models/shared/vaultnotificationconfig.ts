import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VaultNotificationConfig
/** 
 * Represents a vault's notification configuration.
**/
export class VaultNotificationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Events" })
  events?: string[];

  @SpeakeasyMetadata({ data: "json, name=SNSTopic" })
  snsTopic?: string;
}
