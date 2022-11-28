import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigDetails } from "./configdetails";
import { ConfigCapabilityTypeEnum } from "./configcapabilitytypeenum";



// Destination
/** 
 * Dataflow details for the destination side.
**/
export class Destination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configDetails" })
  configDetails?: ConfigDetails;

  @SpeakeasyMetadata({ data: "json, name=configId" })
  configId?: string;

  @SpeakeasyMetadata({ data: "json, name=configType" })
  configType?: ConfigCapabilityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=dataflowDestinationRegion" })
  dataflowDestinationRegion?: string;
}
