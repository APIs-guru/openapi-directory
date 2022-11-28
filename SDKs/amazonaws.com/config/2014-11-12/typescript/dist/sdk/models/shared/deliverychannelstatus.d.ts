import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigExportDeliveryInfo } from "./configexportdeliveryinfo";
import { ConfigStreamDeliveryInfo } from "./configstreamdeliveryinfo";
/**
 * <p>The status of a specified delivery channel.</p> <p>Valid values: <code>Success</code> | <code>Failure</code> </p>
**/
export declare class DeliveryChannelStatus extends SpeakeasyBase {
    configHistoryDeliveryInfo?: ConfigExportDeliveryInfo;
    configSnapshotDeliveryInfo?: ConfigExportDeliveryInfo;
    configStreamDeliveryInfo?: ConfigStreamDeliveryInfo;
    name?: string;
}
