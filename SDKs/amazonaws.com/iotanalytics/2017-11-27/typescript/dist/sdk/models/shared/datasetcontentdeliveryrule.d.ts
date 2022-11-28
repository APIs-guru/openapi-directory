import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetContentDeliveryDestination } from "./datasetcontentdeliverydestination";
/**
 * When dataset contents are created, they are delivered to destination specified here.
**/
export declare class DatasetContentDeliveryRule extends SpeakeasyBase {
    destination: DatasetContentDeliveryDestination;
    entryName?: string;
}
