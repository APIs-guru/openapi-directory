import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigDetails } from "./configdetails";
import { ConfigCapabilityTypeEnum } from "./configcapabilitytypeenum";


// Destination
/** 
 * Dataflow details for the destination side.
**/
export class Destination extends SpeakeasyBase {
  @Metadata({ data: "json, name=configDetails" })
  configDetails?: ConfigDetails;

  @Metadata({ data: "json, name=configId" })
  configId?: string;

  @Metadata({ data: "json, name=configType" })
  configType?: ConfigCapabilityTypeEnum;

  @Metadata({ data: "json, name=dataflowDestinationRegion" })
  dataflowDestinationRegion?: string;
}
