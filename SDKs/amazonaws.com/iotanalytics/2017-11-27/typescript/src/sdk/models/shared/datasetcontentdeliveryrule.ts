import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatasetContentDeliveryDestination } from "./datasetcontentdeliverydestination";



// DatasetContentDeliveryRule
/** 
 * When dataset contents are created, they are delivered to destination specified here.
**/
export class DatasetContentDeliveryRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination: DatasetContentDeliveryDestination;

  @SpeakeasyMetadata({ data: "json, name=entryName" })
  entryName?: string;
}
