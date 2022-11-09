import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VaultNotificationConfig } from "./vaultnotificationconfig";


// GetVaultNotificationsOutput
/** 
 * Contains the Amazon S3 Glacier response to your request.
**/
export class GetVaultNotificationsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=vaultNotificationConfig" })
  vaultNotificationConfig?: VaultNotificationConfig;
}
