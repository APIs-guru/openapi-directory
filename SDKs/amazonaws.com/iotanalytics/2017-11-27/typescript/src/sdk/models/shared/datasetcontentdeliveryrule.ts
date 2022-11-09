import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DatasetContentDeliveryDestination } from "./datasetcontentdeliverydestination";


// DatasetContentDeliveryRule
/** 
 * When dataset contents are created, they are delivered to destination specified here.
**/
export class DatasetContentDeliveryRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination" })
  destination: DatasetContentDeliveryDestination;

  @Metadata({ data: "json, name=entryName" })
  entryName?: string;
}
