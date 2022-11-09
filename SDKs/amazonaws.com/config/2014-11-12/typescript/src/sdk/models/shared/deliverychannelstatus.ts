import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigExportDeliveryInfo } from "./configexportdeliveryinfo";
import { ConfigExportDeliveryInfo } from "./configexportdeliveryinfo";
import { ConfigStreamDeliveryInfo } from "./configstreamdeliveryinfo";


// DeliveryChannelStatus
/** 
 * <p>The status of a specified delivery channel.</p> <p>Valid values: <code>Success</code> | <code>Failure</code> </p>
**/
export class DeliveryChannelStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=configHistoryDeliveryInfo" })
  configHistoryDeliveryInfo?: ConfigExportDeliveryInfo;

  @Metadata({ data: "json, name=configSnapshotDeliveryInfo" })
  configSnapshotDeliveryInfo?: ConfigExportDeliveryInfo;

  @Metadata({ data: "json, name=configStreamDeliveryInfo" })
  configStreamDeliveryInfo?: ConfigStreamDeliveryInfo;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
