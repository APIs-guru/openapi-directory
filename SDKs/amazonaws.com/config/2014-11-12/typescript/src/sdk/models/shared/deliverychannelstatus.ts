import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigExportDeliveryInfo } from "./configexportdeliveryinfo";
import { ConfigStreamDeliveryInfo } from "./configstreamdeliveryinfo";



// DeliveryChannelStatus
/** 
 * <p>The status of a specified delivery channel.</p> <p>Valid values: <code>Success</code> | <code>Failure</code> </p>
**/
export class DeliveryChannelStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configHistoryDeliveryInfo" })
  configHistoryDeliveryInfo?: ConfigExportDeliveryInfo;

  @SpeakeasyMetadata({ data: "json, name=configSnapshotDeliveryInfo" })
  configSnapshotDeliveryInfo?: ConfigExportDeliveryInfo;

  @SpeakeasyMetadata({ data: "json, name=configStreamDeliveryInfo" })
  configStreamDeliveryInfo?: ConfigStreamDeliveryInfo;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
