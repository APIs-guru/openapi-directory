import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VaultNotificationConfig } from "./vaultnotificationconfig";



// GetVaultNotificationsOutput
/** 
 * Contains the Amazon S3 Glacier response to your request.
**/
export class GetVaultNotificationsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=vaultNotificationConfig" })
  vaultNotificationConfig?: VaultNotificationConfig;
}
